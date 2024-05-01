"use client";

import ShoppingIcon from "@mui/icons-material/ShoppingBasket";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";

import stylesGradien from "@/styles/styles-gradient.module.scss";
import stylesAnims from "@/styles/anims/anims.module.scss";

export const ListOfProductsForPaid = () => {
  const [quantityShop, setQuantityShop] = useState<number>(1);
  const [isActiveWindowProducts, setIsActiveWindowProducts] = useState<boolean>(false);
  const [isAnim, setIsAnim] = useState<boolean>();

  const handleAnim = () => {
    setIsActiveWindowProducts(!isActiveWindowProducts);

    if (isActiveWindowProducts === false) {
      setTimeout(() => {
        setIsAnim(false);
      }, 500);
    } else setIsAnim(true);
  };

  const quantityStyle = (quantity: number | undefined): string => {
    const style = "rounded-full border-[2px] p-1 bg-red-600";

    if (quantity === undefined || quantity === 0) return "";

    if (quantity < 10) return style + " min-w-[2.2rem] min-h-2";
    else if (quantity >= 10 && quantity < 100) return style + " min-w-[2.3rem] min-h-2";
    else return style + " min-w-2 min-h-2";
  };

  const arratProducts = [
    {
      id: 1,
      title: "title 1",
      price: 1111,
    },
    {
      id: 2,
      title: "title 2",
      price: 2111,
    },
    {
      id: 3,
      title: "title 3",
      price: 3111,
    },
    {
      id: 4,
      title: "title 4",
      price: 4111,
    },
    {
      id: 5,
      title: "title 5",
      price: 5111,
    },
    {
      id: 6,
      title: "title 6",
      price: 6111,
    },
    {
      id: 7,
      title: "title 7",
      price: 7111,
    },
    {
      id: 8,
      title: "title 8",
      price: 8111,
    },
    {
      id: 9,
      title: "title 9",
      price: 9111,
    },
    {
      id: 10,
      title: "title 10",
      price: 10111,
    },
  ];

  return (
    <>
      {isActiveWindowProducts && (
        <div
          className={`fixed bottom-32 right-20 z-50 p-5 border-2 rounded-xl ${
            stylesGradien.gradientToBottom
          } ${
            isActiveWindowProducts ? isAnim.scaleUpBottomRight : isAnim.scaleDownBottomRight
          } flex justify-center flex-col`}
        >
          <ul className="border-2 py-2 px-3 w-80 h-80  mb-2 rounded-lg bg-white overflow-auto">
            {arratProducts.map(({ id, title, price }) => (
              <li key={id} className="border-2 p-2 flex justify-between mb-2 ">
                <h6>{title}</h6>
                <p>{price}</p>
                <button>
                  <DeleteIcon />
                </button>
              </li>
            ))}
          </ul>

          <button className=" border-2 px-2 py-4 rounded-lg bg-white">Оплатить</button>
        </div>
      )}
      <div className="fixed bottom-10 right-20 z-50">
        <button className="relative border-2 border-black p-4 rounded-[12]" onClick={handleAnim}>
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
