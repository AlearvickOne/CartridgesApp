"use client";

import ShoppingIcon from "@mui/icons-material/ShoppingBasket";
import { useState } from "react";

export const ButtonShop = () => {
  const [quantityShop, setQuantityShop] = useState<number>(323);

  const quantityStyle = (quantity: number): string => {
    if (quantity < 10) return "min-w-[2rem] min-h-2";
    else if (quantity >= 10 && quantity < 100) return "min-w-[2rem] min-h-2";
    else return "min-w-2 min-h-2";
  };

  return (
    <div className="fixed bottom-10 right-20 z-50">
      <button className="relative border-2 border-black p-4 rounded-[12] ">
        <p
          className={`absolute bottom-[3rem] right-[3.2rem] rounded-full bg-red-600 p-1 min-w-[2rem] min-h-2
        >
          {quantityShop}
        </p>
        <ShoppingIcon sx={{ fontSize: 30 }} />
      </button>
    </div>
  );
};
