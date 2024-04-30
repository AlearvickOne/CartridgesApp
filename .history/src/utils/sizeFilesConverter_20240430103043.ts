const sizeFilesConverter = (endFile: File) => {
  let size = 0;

  if (endFile !== undefined) {
    const sizeGetFile = endFile.size

    if (endFile!.size >= 1000 && ) size = Math.round(endFile[0].size / 1000);
  }
};
