import {IProduct} from "./IProduct";

export class Product implements IProduct {
  id: number;
  name: string;
  price: number;
  cover: string;

  constructor(id: number, name: string, price: number, cover: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.cover = cover;
  }
}
