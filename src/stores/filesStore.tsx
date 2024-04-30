import { action, makeObservable, observable } from "mobx";

class FilesStore {
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

export const FilesStoreClass = new FilesStore();
