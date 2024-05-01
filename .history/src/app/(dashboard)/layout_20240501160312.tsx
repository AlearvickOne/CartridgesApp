"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";
import ShoppingIcon from "@mui/icons-material/ShoppingBasket";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative w-full">
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
