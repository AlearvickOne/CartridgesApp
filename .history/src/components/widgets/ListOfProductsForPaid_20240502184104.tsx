"use client";

import ShoppingIcon from "@mui/icons-material/ShoppingBasket";

import { useGetOrdersInBasket } from "@/hooks/useGetOrdersInBasket";
import { OrdersBasketWindow } from "./orders-basket/OrdersBasketWindow";
import { useEffect, useState } from "react";

export const ListOfProductsForPaid = () => {
  const [isActiveWindowProducts, setIsActiveWindowProducts] = useState<boolean>(false);
  const [isAnim, setIsAnim] = useState<boolean>(false);

  const handleAnim = () => {
    setIsAnim(!isActiveWindowProducts);
  };

  useEffect(() => {
    const timerEndAnimation = async () => {
      if (isAnim === false) {
        setTimeout(async () => {
          setIsActiveWindowProducts(false);
        }, 500);
      } else setIsActiveWindowProducts(true);
    };

    timerEndAnimation();
  }, [isAnim]);

  const ordersInBasket = useGetOrdersInBasket();

  const quantityStyle = (quantity: number | undefined): string => {
    const style = "rounded-full border-[2px] p-1 bg-red-600";

    if (quantity === undefined || quantity === 0) return "";

    if (quantity < 10) return style + " min-w-[2.2rem] min-h-2";
    else if (quantity >= 10 && quantity < 100) return style + " min-w-[2.3rem] min-h-2";
    else return style + " min-w-2 min-h-2";
  };

  return (
    <>
      <OrdersBasketWindow
        ordersInBasket={ordersInBasket}
        isActiveWindowProducts={isActiveWindowProducts}
        isAnim={isAnim}
      />
    </>
  );
};
