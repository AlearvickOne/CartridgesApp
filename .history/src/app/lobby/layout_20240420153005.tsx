"useServer";

import Navigation from "@/components/Navigation";
import React, { PropsWithChildren } from "react";
import { auth, signOut } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import { RequiresClass } from "@/services/requires.class";
import { UsersAuthStore } from "@/stores/usersStore";
import Link from "next/link";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  const session = await auth();
  if (!session) redirect("/");

  const findCurrentUserInDb = async () => {
    "use server";
    const dataArray = await RequiresClass.getUsersData();
    dataArray.forEach((user) => {
      if (login === user.name) {
        UsersAuthStore.setCurrentUsersActon(user);
        return;
      }
    });
  };

  findCurrentUserInDb();

  const handleOut = async () => {
    "use server";
    return await signOut();
  };

  return (
    <div className="max-w-7xl m-auto">
      <Navigation handleOut={handleOut} />
      <section className="px-5">{children}</section>
    </div>
  );
}
