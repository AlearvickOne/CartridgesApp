"useServer";

import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";
import { auth, signOut } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import { RequiresClass } from "@/services/requires.class";
import { UsersAuthStore } from "@/stores/usersStore";
import Link from "next/link";
import { Observe } from "./Observe";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  const session = await auth();
  if (!session) redirect("/");

  const findCurrentUserInDb = async () => {
    const dataArray = await RequiresClass.getUsersData();
    dataArray.forEach((user) => {
      if (session.user?.name === user.name) {
        UsersAuthStore.setCurrentUsersActon(user);
        return;
      }
    });
  };

  await findCurrentUserInDb();

  const handleOut = async () => {
    "use server";
    return await signOut();
  };

  return <Observe>{children}</Observe>;
}
