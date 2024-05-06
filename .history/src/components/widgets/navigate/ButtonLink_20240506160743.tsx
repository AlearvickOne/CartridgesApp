"use client";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React, { ReactNode } from "react";

interface IButtonLink {
  fnOnClick: () => void;
  children: ReactNode;
}

export const ButtonLink = ({ fnOnClick, children }: IButtonLink) => {
  const { mutate } = useMutation({
    mutationKey: ["signOut"],
  });

  return (
    <Link href="#" onClick={() => fnOnClick()}>
      <li className="border-2 p-4 rounded-md border-black min-w-40 text-center">{children}</li>
    </Link>
  );
};
