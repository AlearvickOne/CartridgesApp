import { IUsersAuth } from "@/types/auth.interface";
import { RequiresClass } from "../services/requires.class";

import { observable, action, makeObservable } from "mobx";

class UsersStore {
  currentUser: IUsersAuth | undefined;
  currentUserLogin: string = "";

  constructor() {
    makeObservable(this, {
      usersAuth: observable,
      getAuthUsersActon: action,
    });
  }

  getAuthUsersActon = async () => {
    try {
      const data = await RequiresClass.getUsersAuthInfo();
      this.usersAuth = data;
    } catch (err) {
      console.warn(err);
    }
  };
}

export const UsersAuthStore = new UsersStore();
