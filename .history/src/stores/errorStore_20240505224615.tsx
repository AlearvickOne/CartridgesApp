import { action, makeObservable, observable } from "mobx";

class ErrorStore {
  fileInJsonString: string | undefined;

  constructor() {
    makeObservable(this, {
      fileInJsonString: observable,
      setFile: action,
    });
  }

  setFile = async (appendFileString: string) => {
    this.fileInJsonString = appendFileString;
  };
}

export const ErrorStoreClass = new ErrorStore();
