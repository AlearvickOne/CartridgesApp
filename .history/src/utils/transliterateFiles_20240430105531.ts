export const transliterateFiles = (file: File) => {
  transliterate(file.name.replace(/\s+/g, "_"));
};
