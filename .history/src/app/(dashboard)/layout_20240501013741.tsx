"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative bg-[url('../styles/images/bgImage.jpg')] w-full bg-no-repeat">
      <Header handleOut={() => {}} />
      <span className=" w-full h-full absolute top-full left-full" />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
