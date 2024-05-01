"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative ">
      <Header handleOut={() => {}} />
      <span className=" w-100% h-screen top-screen left-screen -z-50 fixed bg-[url('../styles/images/bgImage.jpg')] bg-no-repeat" />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
