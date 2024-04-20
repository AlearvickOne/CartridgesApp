import Link from "next/link";
import React from "react";

export const LiLink = ({ link, textLink }) => {
  return (
    <Link href={"/lobby/list"}>
      <li className="border-2 p-4 rounded-md border-black min-w-40 text-center">Добавить заказ</li>
    </Link>
  );
};
