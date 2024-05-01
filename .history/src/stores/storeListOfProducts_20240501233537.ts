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
    const findId = this.list.find((el) => el.id !== product.id || el.id === undefined);
    findId ? this.list.push(product) : this.list;

    console.log(product);
  };
}

export const ListOfProductsStore = new ListOfProducts();
