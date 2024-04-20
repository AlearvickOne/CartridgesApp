"use client";

import { UsersAuthStore } from "@/stores/usersStore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
interface IHandleOut {
  handleOut: () => void;
  findCurrentUserInDb: (login: string) => void;
}

const Navigation = ({ handleOut, findCurrentUserInDb }: IHandleOut) => {
  return <></>;
};

export default Navigation;
