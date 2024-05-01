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
      if (el.id !== product.id) this.list.push(product);
    });

    console.log(this.list);
  };
}

export const ListOfProductsStore = new ListOfProducts();
