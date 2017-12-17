import {IProduct} from "./IProduct";

export class Product implements IProduct {
  id: number;
  name: string;
  price: number;
  cover: string;
  isSelected: boolean;

  constructor(id: number, name: string, price: number, cover: string, isSelected: boolean = false) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.cover = cover;
    this.isSelected = isSelected;
  }
}
