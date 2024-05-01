"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative w-full">
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] `}>
        <span className="w-screen h-screen scale-x-[2.2] top-0 left-5 -z-50 fixed bg-[url('../styles/images/bgImage.jpg')] bg-contain bg-no-repeat" />

        {children}
      </section>
    </div>
  );
}
