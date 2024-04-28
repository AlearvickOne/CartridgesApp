import Link from "next/link";
import React, { ReactNode } from "react";

interface ILiLink {
  link: string;
  children: ReactNode;
}

export const LiLink = ({ link, children }: ILiLink) => {
  return (
    <Link href={link}>
      <li className="bg-slate-100 py-2 px-5">{children}</li>
    </Link>
  );
};
