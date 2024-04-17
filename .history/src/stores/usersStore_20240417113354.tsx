import { IUsersAuth } from "@/types/auth.interface";
import { RequiresClass } from "../services/requires.class";

import { observable, action, makeObservable } from "mobx";

class UsersStore {
  usersAuth: IUsersAuth[] = [];

  constructor() {
    makeObservable(this, {
      usersAuth: observable,
      getAuthUsersActon: action,
    });
  }

  getAuthUsersActon = async () => {
    try {
      const res = await RequiresClass.getUserAuthInfo();
      this.usersAuth = res.data;
    } catch (err) {
      console.warn(err);
    }
  };
}

export const UsersAuthStore = new UsersStore();
