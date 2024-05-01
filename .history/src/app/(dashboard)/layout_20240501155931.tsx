"useServer";

import Header from "@/components/server-components/Header";
import React, { PropsWithChildren } from "react";
import ShoppingIcon from "@mui/icons-material/ShoppingBasket";

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between relative w-full">
      <div className="fixed bottom-10 right-20 z-50">
        <button className="relative border-2 border-black p-4 rounded-[12] ">
          <p className="absolute bottom-[3rem] right-[3.2rem] rounded-full bg-red-600 p-3 w-5 h-5 flex items-center text-center">
            4
          </p>
          <ShoppingIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] `}>{children}</section>
    </div>
  );
}
