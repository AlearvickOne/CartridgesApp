import { action, makeObservable, observable } from "mobx";

class FilesStore {
  file: File | null = null;

  constructor() {
    makeObservable(this, {
      file: observable,
      getFile: action,
    });
  }

  getFile = async (appendFile: File) => {
    this.file = appendFile;
  };
}

export const FileStoreClass = new FileStore();
