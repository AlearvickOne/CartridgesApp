"use client";

import ShoppingIcon from "@mui/icons-material/ShoppingBasket";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";

import stylesGradien from "@/styles/styles-gradient.module.scss";
import stylesAnims from "@/styles/anims/anims.module.scss";
import { ListOfProductsStore } from "@/stores/storeListOfProducts";

export const ListOfProductsForPaid = () => {
  const [isActiveWindowProducts, setIsActiveWindowProducts] = useState<boolean>(false);
  const [isAnim, setIsAnim] = useState<boolean>();

  const handleAnim = () => {
    setIsAnim(!isActiveWindowProducts);

    if (isAnim === true) {
      setTimeout(() => {
        setIsActiveWindowProducts(false);
      }, 500);
    } else setIsActiveWindowProducts(true);
  };
  console.log(ListOfProductsStore.list);
  const quantityStyle = (quantity: number | undefined): string => {
    const style = "rounded-full border-[2px] p-1 bg-red-600";

    if (quantity === undefined || quantity === 0) return "";

    if (quantity < 10) return style + " min-w-[2.2rem] min-h-2";
    else if (quantity >= 10 && quantity < 100) return style + " min-w-[2.3rem] min-h-2";
    else return style + " min-w-2 min-h-2";
  };

  return (
    <>
      {isActiveWindowProducts && (
        <div
          className={`fixed bottom-32 right-20 z-50 p-5 border-2 rounded-xl ${
            stylesGradien.gradientToBottom
          } ${
            isAnim ? stylesAnims.scaleUpBottomRight : stylesAnims.scaleDownBottomRight
          } flex justify-center flex-col`}
        >
          <ul className="border-2 py-2 px-3 w-80 h-80  mb-2 rounded-lg bg-white overflow-auto">
            {ListOfProductsStore.list?.map(({ id, title, price }) => (
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
              ListOfProductsStore.list?.length
            )} text-white`}
          >
            {ListOfProductsStore.list?.length}
          </p>
          <ShoppingIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
    </>
  );
};
