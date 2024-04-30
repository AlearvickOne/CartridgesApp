const sizeFilesConverter = (endFile: File) => {
  let size = 0;

  const kb = 1000;

  const converter = {
    mb: kb * 10,
    gb: kb * 100,
  };

  if (endFile !== undefined) {
    const sizeGetFile = endFile.size;

    if (sizeGetFile >= 1000 && sizeGetFile < converter.mb)
      size = Math.round(endFile[0].size / 1000);
  }
};
