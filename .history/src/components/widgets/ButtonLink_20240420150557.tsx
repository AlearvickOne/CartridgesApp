"use client";
import Link from "next/link";
import React from "react";

interface IButtonLink {
  fnOnClick?: () => void;
}

export const ButtonLink = ({ fnOnClick }: IButtonLink) => {
  return (
    <Link href="#" onClick={() => fnOnClick()}>
      Выход
    </Link>
  );
};
