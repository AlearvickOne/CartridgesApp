const sizeFilesConverter = (file: File) => {
  let size = 0;

  const kb = 1000;

  const converter = {
    mb: kb * 10,
    gb: kb * 100,
  };

  if (file !== undefined) {
    const sizeGetFile = file.size;

    if (sizeGetFile >= kb && sizeGetFile < converter.mb) size = Math.round(endFile.size / 1000);
  }
};
