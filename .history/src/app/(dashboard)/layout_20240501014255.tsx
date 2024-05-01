"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative ">
      <span className=" w-[200vh] h-screen top-5 left-5  -z-50 fixed bg-[url('../styles/images/bgImage.jpg')] bg-no-repeat" />
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
