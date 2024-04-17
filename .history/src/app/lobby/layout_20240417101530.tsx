"use client";
import { useAuthUsers } from "@/hooks/useAuthUsers";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function LobbyLayout({ children }: PropsWithChildren) {
  const { currentUser } = useAuthUsers();

  const cookies = document.cookie.split(";");
  const currentUserCookie = cookies.find((cookie) => cookie.trim().startsWith("currentUser"));

  if (currentUserCookie) {
    Object.assign(currentUser, JSON.parse(currentUserCookie.split("=")[1]));
  }

  return (
    <div className="max-w-7xl m-auto">
      <section className="px-5">{children}</section>
    </div>
  );
}
