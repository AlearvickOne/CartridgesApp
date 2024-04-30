import { makeObservable } from "mobx";

class FilesStore {
  file: File | null = null;

  constructor() {
    makeObservable(this, {});
  }

  getFile = async(appendFile: File) = {
    this.file = appendFile
  }
}
