"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";
import ShoppingIcon from "@mui/icons-material/ShoppingBasket";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative w-full">
      <div className="fixed bottom-10 right-20 z-50">
        <button className="relative border-2 border-black p-4 rounded-[12] ">
          <div className="absolute bottom-[3rem] right-[3.5rem] rounded-full bg-red-600 p-2">
            <p>44</p>
          </div>
          <ShoppingIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
