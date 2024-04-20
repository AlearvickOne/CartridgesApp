import { IUserNotPass } from "@/types/auth.interface";

import { observable, action, makeObservable } from "mobx";

class UsersStore {
  currentUser: IUserNotPass | undefined;

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      setCurrentUsersActon: action,
    });
  }

  setCurrentUsersActon = async (user: IUserNotPass) => {
    this.currentUser = user;
    console.log(this.currentUser.info);
    try {
    } catch (err) {
      console.warn(err);
    }
  };
}

export const UsersAuthStore = new UsersStore();
