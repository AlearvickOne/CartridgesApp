import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface ILiLink {
  link: string;
  children: PropsWithChildren;
}

export const LiLink = ({ link, textLink }: ILiLink) => {
  return (
    <Link href={link}>
      <li className="border-2 p-4 rounded-md border-black min-w-40 text-center">{textLink}</li>
    </Link>
  );
};
