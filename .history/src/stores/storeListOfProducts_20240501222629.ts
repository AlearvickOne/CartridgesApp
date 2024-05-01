import { action, makeObservable, observable } from "mobx";

interface IList {
  id: number;
  title: string;
  price: number;
}

class ListOfProducts {
  list: IList[] | undefined;

  constructor() {
    makeObservable(this, {
      list: observable,
    });
  }

  setInList = (arrayList: IList[]) => {
    this.list = arrayList;
  };
}
