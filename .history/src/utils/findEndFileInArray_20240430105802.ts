export const findEndFileInArray = (arrayFile: File[]): File[] => {
  return arrayFile.filter((file) => file === arrayFile[arrayFile.length - 1]);
};
