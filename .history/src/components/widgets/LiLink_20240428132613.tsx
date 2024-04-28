import Link from "next/link";
import React, { ReactNode } from "react";

interface ILiLink {
  link: string;
  children: ReactNode;
}

export const LiLink = ({ link, children }: ILiLink) => {
  return (
    <Link href={link}>
      <li className="bg-slate-100 p-2">{children}</li>
    </Link>
  );
};
