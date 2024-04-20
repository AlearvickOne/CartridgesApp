import { ChangeEvent } from "react";

export const deleteSpaceInText = (ev: ChangeEvent<HTMLInputElement>) => {
  const spaceCode = /\s/g;

  return (ev.target.value = ev.target.value.replace(spaceCode, ""));
};
