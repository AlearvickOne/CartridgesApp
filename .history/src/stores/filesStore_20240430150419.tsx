import { makeObservable } from "mobx";

class FilesStore {
  file: File | null = null;

  constructor() {
    makeObservable(this, {});
  }

  getFile(appendFile: File) {}
}
