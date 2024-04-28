"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-20">
      <Header handleOut={() => {}} />
      <section className="px-5 mb-5">{children}</section>
    </div>
  );
}
