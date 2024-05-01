"use client";

import ShoppingIcon from "@mui/icons-material/ShoppingBasket";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";

export const ListOfProductsForPaid = () => {
  const [quantityShop, setQuantityShop] = useState<number>(1);

  const quantityStyle = (quantity: number | undefined): string => {
    const style = "rounded-full border-[2px] p-1 bg-red-600";

    if (quantity === undefined || quantity === 0) return "";

    if (quantity < 10) return style + " min-w-[2.2rem] min-h-2";
    else if (quantity >= 10 && quantity < 100) return style + " min-w-[2.3rem] min-h-2";
    else return style + " min-w-2 min-h-2";
  };

  return (
    <>
      <div className="fixed bottom-32 right-20 z-50">
        <div className=""></div>
        <ul className="border-2 p-5 w-80 h-80 overflow-auto mb-6">
          <li className="border-2 p-2 flex justify-between mb-2">
            <h6>title</h6>
            <p>2222 R</p>
            <button>
              <DeleteIcon />
            </button>
          </li>
          <li className="border-2 p-2 flex justify-between mb-2">
            <h6>title</h6>
            <p>2222 R</p>
            <button>
              <DeleteIcon />
            </button>
          </li>
          <li className="border-2 p-2 flex justify-between mb-2">
            <h6>title</h6>
            <p>2222 R</p>
            <button>
              <DeleteIcon />
            </button>
          </li>
          <li className="border-2 p-2 flex justify-between mb-2">
            <h6>title</h6>
            <p>2222 R</p>
            <button>
              <DeleteIcon />
            </button>
          </li>
          <li className="border-2 p-2 flex justify-between mb-2">
            <h6>title</h6>
            <p>2222 R</p>
            <button>
              <DeleteIcon />
            </button>
          </li>
          <li className="border-2 p-2 flex justify-between mb-2">
            <h6>title</h6>
            <p>2222 R</p>
            <button>
              <DeleteIcon />
            </button>
          </li>
          <li className="border-2 p-2 flex justify-between mb-2">
            <h6>title</h6>
            <p>2222 R</p>
            <button>
              <DeleteIcon />
            </button>
          </li>
        </ul>
      </div>
      <div className="fixed bottom-10 right-20 z-50">
        <button className="relative border-2 border-black p-4 rounded-[12] ">
          <p
            className={`absolute bottom-[2.4rem] right-[2.2rem] ${quantityStyle(
              quantityShop
            )} text-white`}
          >
            {quantityShop}
          </p>
          <ShoppingIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
    </>
  );
};
