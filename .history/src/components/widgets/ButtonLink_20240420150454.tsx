"use client";
import Link from "next/link";
import React from "react";

export const ButtonLink = (fnOnClick) => {
  return (
    <Link href="#" onClick={() => fnOnClick()}>
      Выход
    </Link>
  );
};
