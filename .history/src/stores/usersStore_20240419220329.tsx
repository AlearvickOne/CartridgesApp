import { IUser } from "@/types/auth.interface";
import { RequiresClass } from "../services/requires.class";

import { observable, action, makeObservable } from "mobx";

class UsersStore {
  currentUser: IUser | undefined;
  private currentUserLogin: string | undefined;

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      currentUserLogin: observable,
      getAuthUsersActon: action,
    });
  }

  setAuthUsersActon = async (loginUser) => {
    try {
      this.currentUser = this.currentUser?🔍;
    } catch (err) {
      console.warn(err);
    }
  };
}

export const UsersAuthStore = new UsersStore();
