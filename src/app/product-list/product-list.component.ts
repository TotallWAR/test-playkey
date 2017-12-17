import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../Product/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  wishList: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
    this.getWishList();
  }

  getProducts(): void {
    this.productService.getProductList()
      .subscribe(products => this.products = products);
  }

  addToWishList(product: Product): void {
    this.productService.addToWishList(product);
  }

  getWishList(): void {
    this.productService.getWishList()
      .subscribe(wishList => {
        this.wishList = wishList;
      });
  }

  isInWishList(product: Product): boolean {
    return (this.wishList && this.wishList.length) ?
      !this.wishList.every((el: Product) => el.id !== product.id)
      : false;
  }

}
