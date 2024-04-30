import { transliterate } from "transliteration";

export const transliterateFiles = (file: File): string => {
  if (file === undefined) return "";

  return transliterate(file.name.replace(/\s+/g, "_"));
};
