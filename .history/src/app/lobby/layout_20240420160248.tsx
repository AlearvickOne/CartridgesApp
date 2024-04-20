"useServer";

import Navigation from "@/components/Header";
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

  return (
    <div className="max-w-7xl m-auto bg-slate-50  border-x-2 border-b-2 border-black mb-5">
      <Navigation handleOut={handleOut} />
      <section className="px-5">{children}</section>
    </div>
  );
}
