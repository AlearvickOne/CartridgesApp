"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";
import stylesScroll from "@/styles/styles-customScroll.module.scss";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between">
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em]  ${stylesScroll.customScroll} mr-10`}>{children}</section>
    </div>
  );
}
