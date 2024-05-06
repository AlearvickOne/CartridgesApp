"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface ILiLink {
  link: string;
  children: ReactNode;
}

export const LiLink = ({ link, children }: ILiLink) => {
  const pathname = usePathname();

  return (
    <Link href={link}>
      <li className="bg-slate-100 py-2 px-5 rounded-[10px] hover:bg-sky-200">{children}</li>
    </Link>
  );
};
