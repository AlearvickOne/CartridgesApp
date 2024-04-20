import { IUserNotPass } from "@/types/auth.interface";

import { observable, action, makeObservable } from "mobx";

class UsersStore {
  currentUser: IUserNotPass = {
    id: "",
    name: "",
    info: {
      userName: "leks",
      userSurname: "laster",
    },
  };

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      setCurrentUsersActon: action,
    });
  }

  setCurrentUsersActon = async (user: IUserNotPass) => {
    console.log("yes");

    this.currentUser = user;
    try {
    } catch (err) {
      console.warn(err);
    }
  };
}

export const UsersAuthStore = new UsersStore();
