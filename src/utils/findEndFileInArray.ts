export const findEndFileInArray = (arrayFile: File[]): File[] => {
  if (arrayFile === undefined) return [];

  return arrayFile.filter((file) => file === arrayFile[arrayFile.length - 1]);
};
