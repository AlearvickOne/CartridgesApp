export const fileObjectToStrng = (fileObj: File) => {
  if (!fileObj) return;

  const fileObject = {
    name: fileObj.name,
    size: fileObj.size,
    type: fileObj.type,
    lastModified: fileObj.lastModified,
  };

  fileObj !== undefined && setFile(JSON.stringify(fileObject));
};
