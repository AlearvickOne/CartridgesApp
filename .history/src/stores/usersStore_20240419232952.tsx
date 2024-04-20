import { IUserNotPass } from "@/types/auth.interface";
import { RequiresClass } from "../services/requires.class";

import { observable, action, makeObservable } from "mobx";

class UsersStore {
  currentUser: IUserNotPass = {
    id: "",
    name: "arudes",
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
