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
  const { data: session } = useSession();

  useEffect(() => {
    const res = async () => await findCurrentUserInDb(session?.user?.name!);
    res();
  }, [findCurrentUserInDb]);

  console.log(session?.user?.name);
  return <></>;
};

export default Navigation;
