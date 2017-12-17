import {Component, OnInit} from '@angular/core';
import {Product} from '../Product/product';
import {ProductService} from '../product.service';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishList: Product[];
  wishListPrice: number;

  constructor(private productService: ProductService) {
    this.wishListPrice = 0;
  }

  ngOnInit() {
    this.getWishList();
  }


  getWishList(): void {
    this.productService.getWishList()
      .subscribe(wishList => {
        this.wishList = wishList;
        this.calculateWishListPrice();
      });
  }

  clearWishList() {
    this.productService.clearWishList()
      .subscribe(wishList => {
        this.wishList = wishList;
        this.calculateWishListPrice();
      });
  }

  removeProductFromWishList(product: Product) {
    this.productService.removeProductFromWishList(product)
      .subscribe(wishList => {
        this.wishList = wishList;
        this.calculateWishListPrice();
      });
  }

  calculateWishListPrice(): void {
    this.wishListPrice = 0;
    if (this.wishList && this.wishList.length) {
      this.wishList.forEach(el => {
        this.wishListPrice += el.price ? el.price : 0;
      });
    }
  }
}
