import Link from "next/link";
import React, { ReactNode } from "react";

interface ILiLink {
  link: string;
  children: ReactNode;
}

export const LiLink = ({ link, children }: ILiLink) => {
  return (
    <Link href={link}>
      <li className="border-2 p-4 rounded-md border-black min-w-40 text-center">{children}</li>
    </Link>
  );
};
