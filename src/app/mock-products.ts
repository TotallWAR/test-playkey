import {Product} from './Product/product';
import * as productList from './products.json';

export const getMockProducts = (): Product[] => {
  let wishList: Product[] = [];
  for (let prop in productList) {
    wishList.push(new Product(
      +prop,
      productList[prop].name,
      productList[prop].price,
      productList[prop].cover)
    );
  }
  return wishList;
};
