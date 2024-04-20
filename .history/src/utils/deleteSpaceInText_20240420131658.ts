import { ChangeEvent, FormEvent } from "react";

export const deleteSpaceInText = (ev: FormEvent<HTMLInputElement>) => {
  const spaceCode = /\s/g;

  return (ev.target.value = ev.target.value.replace(spaceCode, ""));
};
