"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between">
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] bg-[url('../styles/images/bgImage.jpg')] w-full`}>
        {children}
      </section>
    </div>
  );
}
