"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative w-full">
      <div className="fixed bottom-10 right-20">
        <button className="relative"></button>
      </div>
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
