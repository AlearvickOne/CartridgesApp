"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between">
      <Header handleOut={() => {}} />
      <span className="bg-[url('../styles/images/bgImage.jpg')] w-screen h-screen absolute top-full left-full" />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
