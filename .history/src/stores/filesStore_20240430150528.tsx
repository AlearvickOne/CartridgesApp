import { makeObservable, observable } from "mobx";

class FilesStore {
  file: File | null = null;

  constructor() {
    makeObservable(this, {
      file: observable,
    });
  }

  getFile = async (appendFile: File) => {
    this.file = appendFile;
  };
}
