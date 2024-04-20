"useServer";

import Navigation from "@/components/Navigation";
import React, { PropsWithChildren } from "react";
import { auth, signOut } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import { RequiresClass } from "@/services/requires.class";
import { UsersAuthStore } from "@/stores/usersStore";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  const session = await auth();
  if (!session) redirect("/");

  const findCurrentUserInDb = async (login: string) => {
    const dataArray = await RequiresClass.getUsersData();
    dataArray.forEach((user) => {
      if (login === user.name) {
        UsersAuthStore.setCurrentUsersActon(user);
      }
    });
  };

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
