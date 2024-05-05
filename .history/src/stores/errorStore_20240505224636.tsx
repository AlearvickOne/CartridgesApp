import { action, makeObservable, observable } from "mobx";

class ErrorStore {
  error: string | undefined;

  constructor() {
    makeObservable(this, {
      error: observable,
      setError: action,
    });
  }

  setError = async (appendFileString: string) => {
    this.error = appendFileString;
  };
}

export const ErrorStoreClass = new ErrorStore();
