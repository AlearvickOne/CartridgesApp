"use client";

import ShoppingIcon from "@mui/icons-material/ShoppingBasket";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { useEffect, useState } from "react";

import stylesGradien from "@/styles/styles-gradient.module.scss";
import stylesAnims from "@/styles/anims/anims.module.scss";
import { useGetOrdersInBasket } from "@/hooks/useGetOrdersInBasket";
import { SocketApiClass } from "@/app/api/socket-api";

export const ListOfProductsForPaid = () => {
  const [isActiveWindowProducts, setIsActiveWindowProducts] = useState<boolean>(false);
  const [isAnim, setIsAnim] = useState<boolean>(false);

  const ordersInBasket = useGetOrdersInBasket();

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isAnim === false) {
      setTimeout(() => {
        setIsActiveWindowProducts(false);
      }, 500);
    } else setIsActiveWindowProducts(true);

    return clearTimeout(timer);
  }, [isAnim]);

  const handleAnim = () => {
    setIsAnim(!isActiveWindowProducts);
  };

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
            {ordersInBasket?.map(({ id, titleOrder, priceOrder }) => (
              <li key={id} className="border-2 p-2 flex justify-between mb-2 ">
                <h6>{titleOrder}</h6>
                <p>{priceOrder}</p>
                <button onClick={() => SocketApiClass.deleteOrderFromOrderBasket(id)}>
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
              ordersInBasket?.length
            )} text-white`}
          >
            {ordersInBasket?.length}
          </p>
          <ShoppingIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
    </>
  );
};
