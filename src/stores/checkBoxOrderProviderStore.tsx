import { DisBoolean } from "@/types/Dispatch.types";
import { action, makeObservable, observable } from "mobx";

class CheckBoxOrderProvider {
  isClickProviderCheckBox: boolean = false;

  constructor() {
    makeObservable(this, {
      isClickProviderCheckBox: observable,
      setClickProviderCheckBox: action,
    });
  }

  async setClickProviderCheckBox(isClick: boolean) {
    this.isClickProviderCheckBox = isClick;
  }

  getClickProviderCheckBox(setState: DisBoolean) {
    setState(this.isClickProviderCheckBox);
  }
}

export const CheckBoxOrderProviderStore = new CheckBoxOrderProvider();
