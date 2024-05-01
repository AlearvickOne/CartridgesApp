import { action, makeObservable, observable } from "mobx";

export interface IList {
  id: number | string;
  title: string;
  price: number;
}

class ListOfProducts {
  list: IList[] | undefined;

  constructor() {
    makeObservable(this, {
      list: observable,
      setInList: action,
    });
  }

  setInList = (products: IList[]) => {
    this.list = product;
  };
}

export const ListOfProductsStore = new ListOfProducts();
