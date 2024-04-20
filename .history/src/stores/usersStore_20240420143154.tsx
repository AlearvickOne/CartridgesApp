import { IUserNotPass } from "@/types/auth.interface";

import { observable, action, makeObservable } from "mobx";

class UsersStore {
  currentUser: IUserNotPass = {
    id: "",
    name: "",
    info: {
      name: "leks",
      surname: "laster",
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
