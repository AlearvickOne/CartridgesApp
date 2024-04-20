"use client";

import { UsersAuthStore } from "@/stores/usersStore";
import { useSession } from "next-auth-modify/react";
import Link from "next/link";
import React from "react";
interface IHandleOut {
  handleOut: () => void;
}

const Navigation = ({ handleOut }: IHandleOut) => {
  const { data: session } = useSession();
  console.log(session);
  console.log(UsersAuthStore.currentUser?.info.name);
  return (
    <>
      <header className="flex justify-between items-center px-5 py-2 mb-5 border-b-2 border-black">
        <div className="">
          <p>info</p>
          <p>{UsersAuthStore.currentUser?.info.name}</p>
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

          <li className="border-2 p-1 rounded-md border-black">
            <Link href="#" onClick={() => handleOut()}>
              Выход
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navigation;
