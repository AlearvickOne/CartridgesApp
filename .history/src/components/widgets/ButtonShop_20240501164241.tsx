"use client";

import ShoppingIcon from "@mui/icons-material/ShoppingBasket";
import { useState } from "react";

export const ButtonShop = () => {
  const [quantityShop, setQuantityShop] = useState<number>(3);

  return (
    <div className="fixed bottom-10 right-20 z-50">
      <button className="relative border-2 border-black p-4 rounded-[12] ">
        <p
          className={`absolute bottom-[2.4rem] right-[2.2rem] rounded-full border-[2px] bg-red-600 p-1 min-w-[2rem] min-h-2 text-white`}
        >
          {quantityShop}
        </p>
        <ShoppingIcon sx={{ fontSize: 30 }} />
      </button>
    </div>
  );
};
