export const sizeFilesConverter = (file: File): string => {
  let size = "0 bytes";

  const kb = 1000;

  const converter = {
    mb: kb * 100,
    gb: kb * 1000,
  };

  if (file !== undefined) {
    const bytesGetFile = file.size;

    if (bytesGetFile >= kb && bytesGetFile < converter.mb) {
      size = `${roundedSize(bytesGetFile, kb)} KB`;
    } else if (bytesGetFile >= converter.mb && bytesGetFile < converter.gb) {
      size = `${roundedSize(bytesGetFile, converter.mb)} MB`;
    } else {
      size = `${roundedSize(bytesGetFile, converter.gb)} GB`;
    }
  }

  return size;
};

const roundedSize = (bytes: number, converterBytes: number): number => {
  return Math.round(bytes / converterBytes);
};
