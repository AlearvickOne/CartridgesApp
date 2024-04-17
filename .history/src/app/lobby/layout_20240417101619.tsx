"use client";
import { useAuthUsers } from "@/hooks/useAuthUsers";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-7xl m-auto">
      <section className="px-5">{children}</section>
    </div>
  );
}
