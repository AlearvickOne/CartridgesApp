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
}

export const CheckBoxOrderProviderStore = new CheckBoxOrderProvider();
