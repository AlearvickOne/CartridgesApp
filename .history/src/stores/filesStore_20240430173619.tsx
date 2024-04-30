import { action, makeObservable, observable } from "mobx";

class FilesStore {
  fileInJsonString: string;

  constructor() {
    makeObservable(this, {
      fileInJsonString: observable,
      setFile: action,
    });
  }

  setFile = async (appendFile: File) => {
    this.fileInJsonString = appendFile;
  };
}

export const FilesStoreClass = new FilesStore();
