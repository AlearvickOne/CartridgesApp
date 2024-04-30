const findEndFileInArray = (arrayFile: File[]) => {
  return arrayFile.filter((file) => file === arrayFile[arrayFile.length - 1]);
};
