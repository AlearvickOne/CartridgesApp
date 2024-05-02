"use client";

import ShoppingIcon from "@mui/icons-material/ShoppingBasket";

import { useGetOrdersInBasket } from "@/hooks/useGetOrdersInBasket";
import { OrdersBasketWindow } from "./orders-basket/OrdersBasketWindow";
import { useEffect, useState } from "react";
import { OrdersBasketButtonOpenWindow } from "./orders-basket/OrdersBasketButtonOpenWindow";

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

  return (
    <>
      <OrdersBasketWindow
        ordersInBasket={ordersInBasket}
        isActiveWindowProducts={isActiveWindowProducts}
        isAnim={isAnim}
      />
      <OrdersBasketButtonOpenWindow />
    </>
  );
};
