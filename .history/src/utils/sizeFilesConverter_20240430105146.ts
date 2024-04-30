const sizeFilesConverter = (file: File) => {
  let size = "0 bytes";

  const kb = 1000;

  const converter = {
    mb: kb * 10,
    gb: kb * 100,
  };

  if (file !== undefined) {
    const bytesGetFile = file.size;

    if (bytesGetFile >= kb && bytesGetFile < converter.mb) {
      size = `${roundedSize(bytesGetFile, kb)} KB`;
    } else if (bytesGetFile >= converter.mb && bytesGetFile < converter.gb) {
      size = `${roundedSize(bytesGetFile, converter.mb)} KB`;
    } else {
      size = `${roundedSize(bytesGetFile, converter.gb)} KB`;
    }
  }

  return size;
};

const roundedSize = (bytes: number, converterBytes: number) => {
  return Math.round(bytes / converterBytes);
};
