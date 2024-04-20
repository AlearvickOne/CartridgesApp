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

  const findCurrentUserInDb = async (login: string) => {
    "use server";
    const dataArray = await RequiresClass.getUsersData();
    dataArray.forEach((user) => {
      console.log(session.user?.name);
      if (login === user.name) {
        UsersAuthStore.setCurrentUsersActon(user);
        return;
      }
    });
  };

  const handleOut = async () => {
    "use server";
    return await signOut();
  };

  return (
    <div className="max-w-7xl m-auto">
      <header className="flex justify-between items-center px-5 py-2 mb-5 border-b-2 border-black">
        <div className="">
          <p>info</p>
          <p>{UsersAuthStore.currentUser?.info?.userName}</p>
        </div>
        <ul className="flex gap-5">
          <li className="border-2 p-1 rounded-md border-black">
            <Link href={"/lobby/list"}>Добавить заказ</Link>
          </li>
          <li className="border-2 p-1 rounded-md border-black">
            <Link href={"/lobby"}>Не оплаченные заказы</Link>
          </li>
          <li className="border-2 p-1 rounded-md border-black">
            <Link href={"/lobby/list"}>Оплаченные заказы</Link>
          </li>

          {/* <li className="border-2 p-1 rounded-md border-black">
            <Link href="#" onClick={() => handleOut()}>
              Выход
            </Link>
          </li> */}
        </ul>
      </header>

      <Navigation handleOut={handleOut} findCurrentUserInDb={findCurrentUserInDb} />
      <section className="px-5">{children}</section>
    </div>
  );
}
