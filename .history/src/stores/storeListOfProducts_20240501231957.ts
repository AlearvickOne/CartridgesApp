import { action, makeObservable, observable } from "mobx";

export interface IList {
  id: number | string;
  title: string;
  price: number;
}

class ListOfProducts {
  list: IList[] | undefined;
  private product: IList | undefined;

  constructor() {
    makeObservable(this, {
      list: observable,
      setInList: action,
    });
  }

  setInList = (product: IList) => {
    this.product = product;
    const arr = this.list;
    arr?.push(product);
    this.list = arr;

    console.log(this.product);
  };
}

export const ListOfProductsStore = new ListOfProducts();
