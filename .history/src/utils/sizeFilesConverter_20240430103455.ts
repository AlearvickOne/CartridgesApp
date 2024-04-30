const sizeFilesConverter = (endFile: File) => {
  let size = 0;

  const kb = 1000;

  const converter = {
    mb: kb * 10,
  };

  if (endFile !== undefined) {
    const sizeGetFile = endFile.size;

    if (sizeGetFile >= 1000 && sizeGetFile < 10000) size = Math.round(endFile[0].size / 1000);
  }
};
