"use clietn";

import React from "react";

export const ButtonShop = () => {
  return (
    <div className="fixed bottom-10 right-20 z-50">
      <button className="relative border-2 border-black p-4 rounded-[12] ">
        <p className="absolute bottom-[3rem] right-[3.2rem] rounded-full bg-red-600 p-3 min-w-2 min-h-2 ">
          10
        </p>
        <ShoppingIcon sx={{ fontSize: 30 }} />
      </button>
    </div>
  );
};
