import { ChangeEvent } from "react";

export const deleteSpaceInText = (e: ChangeEvent<HTMLInputElement>) => {
  const spaceCode = /\s/g;

  return (e.target.value = e.target.value.replace());
};
