import { action, makeObservable, observable } from "mobx";

export interface IList {
  id: number | string;

  idOrder: number;
  titleOrder: string;
  priceOrder: number;
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
    else {
      const findProduct = this.list.find((el) => el.id === product.id);
      if (!findProduct) this.list.push(product);
    }
  };
}

export const ListOfProductsStore = new ListOfProducts();
