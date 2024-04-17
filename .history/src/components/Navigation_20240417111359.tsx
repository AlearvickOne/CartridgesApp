"use client";

import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  const session = useSession();
  const sessionGet = getServerSession(authConfig);

  console.log(sessionGet);

  return (
    <>
      <header className="flex justify-between items-center px-5 py-2 mb-5 border-b-2 border-black">
        <div className="">
          <p>userInfo</p>
          <p>login</p>
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
            <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
              Выход
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navigation;
