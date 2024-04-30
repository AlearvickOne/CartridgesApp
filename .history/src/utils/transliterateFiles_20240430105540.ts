import { transliterate } from "transliteration";

export const transliterateFiles = (file: File) => {
  return transliterate(file.name.replace(/\s+/g, "_"));
};
