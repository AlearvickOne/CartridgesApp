import { IUsersAuth } from "@/types/auth.interface";
import { RequiresClass } from "../services/requires.class";

import { observable, action, makeObservable } from "mobx";

class UsersStore {
  currentUser: IUsersAuth | undefined;
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
      this.currentUserLogin = loginUser;
    } catch (err) {
      console.warn(err);
    }
  };
}

export const UsersAuthStore = new UsersStore();
