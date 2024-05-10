import { IUser } from "@/types/auth.interface";
import { action, makeObservable, observable } from "mobx";

class DataUser {
  data: IUser | undefined;

  constructor() {
    makeObservable(this, {
      data: observable,
      setUserInData: action,
    });
  }

  setUserInData(data: IUser) {
    this.data = data;
  }
}

export const StoreDataUser = new DataUser();
