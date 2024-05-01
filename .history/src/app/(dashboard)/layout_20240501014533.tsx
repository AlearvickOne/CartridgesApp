"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative w-full">
      <span className="w-screen h-screen top-2 left-2 bottom-2  -z-50 fixed scale-200 bg-[url('../styles/images/bgImage.jpg')] bg-no-repeat" />
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
