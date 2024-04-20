import { IUserNotPass } from "@/types/auth.interface";
import { RequiresClass } from "../services/requires.class";

import { observable, action, makeObservable, makeAutoObservable } from "mobx";

class UsersStore {
  currentUser: IUserNotPass = {
    id: "",
    login: "arudes",
    info: {
      name: "leks",
      surname: "laster",
    },
  };

  constructor() {
    makeAutoObservable(this);
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
