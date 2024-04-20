import { IUser } from "@/types/auth.interface";
import { RequiresClass } from "../services/requires.class";

import { observable, action, makeObservable } from "mobx";

class UsersStore {
  currentUser: IUser | undefined;

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      getAuthUsersActon: action,
    });
  }

  getAuthUsersActon = async (loginUser) => {
    try {
      this.currentUser = this.currentUser?🔍;
    } catch (err) {
      console.warn(err);
    }
  };
}

export const UsersAuthStore = new UsersStore();
