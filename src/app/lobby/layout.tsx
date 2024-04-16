import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-7xl m-auto">
      <header className="flex justify-between items-center px-5 py-2 mb-5 border-b-2 border-black">
        <div className="">
          <p>userInfo</p>
          <p>userLogin</p>
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
            <Link href={"/lobby/list"}>Выход</Link>
          </li>
        </ul>
      </header>
      <section className="px-5">{children}</section>
    </div>
  );
}
