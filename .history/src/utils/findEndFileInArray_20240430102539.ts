const findEndFileInArray = (arrayFile) => {
  return arrayFile.filter((file) => file === arrayFile[arrayFile.length - 1]);
};
