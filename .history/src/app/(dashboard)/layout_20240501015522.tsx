"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative w-full">
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] `}>
        <span className="w-screen h-screen -z-50 absolute scale-[1.5] bg-[url('../styles/images/bgImage.jpg')] bg-no-repeat" />

        {children}
      </section>
    </div>
  );
}
