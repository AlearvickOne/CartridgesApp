import { action, makeObservable, observable } from "mobx";

class FilesStore {
  file: File | undefined;

  constructor() {
    makeObservable(this, {
      file: observable,
      setFile: action,
    });
  }

  setFile = async (appendFile: File) => {
    this.file = appendFile;
  };
}

export const FilesStoreClass = new FilesStore();
