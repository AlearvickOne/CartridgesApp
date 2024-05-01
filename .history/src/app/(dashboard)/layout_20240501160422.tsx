"useServer";

import Header from "@/components/server-components/Header";
import { ButtonShop } from "@/components/widgets/ButtonShop";
import React, { PropsWithChildren } from "react";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative w-full">
      <ButtonShop />
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
