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

  setInList = async (product: IList) => {
    if (!this.list[0]) await this.list.push(product);
    else {
      const findProduct = await this.list.find((el) => el.id === product.id);
      console.log(findProduct);
      if (!findProduct) await this.list.push(product);
    }
  };
}

export const ListOfProductsStore = new ListOfProducts();
