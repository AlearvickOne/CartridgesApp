"useServer";

import Header from "@/components/server-components/Header";
import { ListOfProductsForPaid } from "@/components/widgets/ListOfProductsForPaid";

import React, { PropsWithChildren } from "react";
import { SocketApiClass } from "../api/socket-api";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative w-full">
      <ListOfProductsForPaid />
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
