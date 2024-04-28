"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <Header handleOut={() => {}} />
      <section className="px-5 mb-5 w-[20rem]">{children}</section>
    </div>
  );
}
