import Link from "next/link";
import React from "react";

interface ILiLink {
  link: string;
  textLink: string;
}

export const LiLink = ({ link, textLink }) => {
  return (
    <Link href={link}>
      <li className="border-2 p-4 rounded-md border-black min-w-40 text-center">{textLink}</li>
    </Link>
  );
};
