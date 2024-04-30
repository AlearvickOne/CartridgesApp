const sizeFilesConverter = () => {
  let size = 0;

  if (endFile[0] !== undefined) {
    if (endFile[0]!.size >= 1000) size = Math.round(endFile[0].size / 1000);
  }
};
