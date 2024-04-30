const sizeFilesConverter = (file: File) => {
  let size = 0;

  const kb = 1000;

  const converter = {
    mb: kb * 10,
    gb: kb * 100,
  };

  if (file !== undefined) {
    const bytesGetFile = file.size;

    if (bytesGetFile >= kb && bytesGetFile < converter.mb) size = Math.round(bytesGetFile / kb);
    else if (bytesGetFile >= converter.mb )
  }
};
