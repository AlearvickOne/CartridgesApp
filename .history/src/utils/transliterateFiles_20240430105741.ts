import { transliterate } from "transliteration";

export const transliterateFiles = (file: File): string => {
  return transliterate(file.name.replace(/\s+/g, "_"));
};
