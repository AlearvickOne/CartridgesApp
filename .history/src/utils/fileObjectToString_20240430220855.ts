import { FilesStoreClass } from "@/stores/filesStore";

export const fileObjectToString = (fileObj: File) => {
  if (!fileObj) return;

  const fileObject = {
    name: fileObj.name,
    size: fileObj.size,
    type: fileObj.type,
    lastModified: fileObj.lastModified,
  };

  fileObj !== undefined && FilesStoreClass.setFile(JSON.stringify(fileObject));
};
