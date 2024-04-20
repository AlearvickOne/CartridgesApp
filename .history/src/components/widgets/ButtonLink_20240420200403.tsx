"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

interface IButtonLink {
  fnOnClick: (id?: string | number, isStatusOrder?: boolean) => void | (id?: string | number, isStatusOrder?: boolean) => Pronise<void>;
  children: ReactNode;
}

export const ButtonLink = ({ fnOnClick, children }: IButtonLink) => {
  return (
    <Link href="#" onClick={() => fnOnClick()}>
      <li className="border-2 p-4 rounded-md border-black min-w-40 text-center">{children}</li>
    </Link>
  );
};
