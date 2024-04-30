import { action, makeObservable, observable } from "mobx";

class FilesStore {
  fileInJsonString: string;

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
