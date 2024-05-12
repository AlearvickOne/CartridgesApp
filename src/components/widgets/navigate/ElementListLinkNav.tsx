"use client";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ILiLink {
  link: string;
  children: ReactNode;
}

export const ElementListLinkNav = observer(({ link, children }: ILiLink) => {
  const pathname = usePathname();

  return (
    <Link href={link}>
      <li
        className={`bg-slate-100 py-2 px-5 rounded-[10px] hover:bg-yellow-100 ${
          pathname === link ? "bg-yellow-200" : ""
        }`}
      >
        {children}
      </li>
    </Link>
  );
});
