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
    if (!this.list[0]) this.list.push(product);

    const findProduct = this.list.find((el) => el.id !== product.id);

    this.list.forEach((el) => {
      if (el.id !== product.id) this.list.push(product);
      else return null;
    });
  };
}

export const ListOfProductsStore = new ListOfProducts();