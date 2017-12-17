import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {AsyncLocalStorage} from 'angular-async-local-storage';
import {Subject} from 'rxjs/Subject';

import {Product} from './Product/product';
import {getMockProducts} from './mock-products';

@Injectable()
export class ProductService {
  private wishList = new Subject<Product[]>();

  constructor(protected localStorage: AsyncLocalStorage) {
  }

  getProductList(): Observable<Product[]> {
    return of(getMockProducts());
  }

  addToWishList(product: Product): void {
    this.localStorage.getItem<Product[]>('wishList').subscribe((wishList) => {
      if (wishList && wishList.length) {
        if (wishList.every((el: Product) => el.id !== product.id)) {
          wishList.push(product);
          this.localStorage.setItem('wishList', wishList).subscribe(() => {
            this.wishList.next(wishList);
          });
        }
      } else {
        wishList = new Array<Product>();
        wishList.push(product);
        this.localStorage.setItem('wishList', wishList).subscribe(() => {
          this.wishList.next(wishList);
        });
      }
    });
  }

  getWishList(): Observable<Product[]> {
    this.localStorage.getItem<Product[]>('wishList').subscribe((wishList) => {
      this.wishList.next(wishList);
    });
    return this.wishList;
  }

  clearWishList(): Observable<Product[]> {
    this.localStorage.removeItem('wishList').subscribe(() => {
      this.wishList.next();
    });
    return this.wishList;
  }

  removeProductFromWishList(product: Product): Observable<Product[]> {
    this.localStorage.getItem<Product[]>('wishList').subscribe((wishList) => {
      if (wishList && wishList.length && product) {
        wishList = wishList.filter((el: Product) => el.id !== product.id);
        this.localStorage.setItem('wishList', wishList).subscribe(() => {
          this.wishList.next(wishList);
        });
      }
    });
    return this.wishList;
  }

}
