import { action, makeObservable, observable } from "mobx";

class ErrorStore {
  error: string | undefined;

  constructor() {
    makeObservable(this, {
      error: observable,
      setError: action,
    });
  }

  setError = async (error: string) => {
    this.error = error;
  };
}

export const ErrorStoreClass = new ErrorStore();
