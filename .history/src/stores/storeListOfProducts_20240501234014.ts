import { action, makeObservable, observable } from "mobx";

export interface IList {
  id: number | string;
  title: string;
  price: number;
}

class ListOfProducts {
  list: IList[] = [];
  private product: IList | undefined;

  constructor() {
    makeObservable(this, {
      list: observable,
      setInList: action,
    });
  }

  setInList = (product: IList) => {
    this.list.forEach((el) => {
      console.log(el.title);
      if (el.title !== product.title) this.list.push(product);
    });
  };
}

export const ListOfProductsStore = new ListOfProducts();
