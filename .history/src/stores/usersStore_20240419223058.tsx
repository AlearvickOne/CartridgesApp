import { IUserNotPass } from "@/types/auth.interface";
import { RequiresClass } from "../services/requires.class";

import { observable, action, makeObservable } from "mobx";

class UsersStore {
  currentUser: IUserNotPass = {
    id: "",
    login: "",
    info: {
      name: "",
      surname: "",
    },
  };

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      setCurrentUsersActon: action,
    });
  }

  setCurrentUsersActon = async (user: IUserNotPass) => {
    this.currentUser = user;
    try {
    } catch (err) {
      console.warn(err);
    }
  };
}

export const UsersAuthStore = new UsersStore();
