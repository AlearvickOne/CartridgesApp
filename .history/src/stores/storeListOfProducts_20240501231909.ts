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
    const arr = list;
    arr.push;

    this.list?.push(this.product);
    console.log(this.product);
  };
}

export const ListOfProductsStore = new ListOfProducts();
