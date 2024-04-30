import { action, makeObservable, observable } from "mobx";

class FilesStore {
  file: File | null = null;

  constructor() {
    makeObservable(this, {
      file: observable,
      etFile: action,
    });
  }

  setFile = async (appendFile: File) => {
    this.file = appendFile;
  };
}

export const FilesStoreClass = new FilesStore();
