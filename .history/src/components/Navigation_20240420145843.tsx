"use client";

import React, { useEffect } from "react";
interface IHandleOut {
  handleOut: () => void;
  findCurrentUserInDb: (login: string) => void;
}

const Navigation = ({ handleOut, findCurrentUserInDb }: IHandleOut) => {
  return <></>;
};

export default Navigation;
