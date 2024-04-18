"useServer";

import Navigation from "@/components/Navigation";
import React, { PropsWithChildren } from "react";
import { signOut } from "@/app/api/auth/configs/auth";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  const handleOut = async () => {
    "use server";
    await signOut();
  };

  return (
    <div className="max-w-7xl m-auto">
      <Navigation handleOut={handleOut} />
      <section className="px-5">{children}</section>
    </div>
  );
}
