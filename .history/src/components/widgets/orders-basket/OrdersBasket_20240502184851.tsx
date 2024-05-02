"use client";

import { useGetOrdersInBasket } from "@/hooks/useGetOrdersInBasket";
import { OrdersBasketWindow } from "./orders-basket/OrdersBasketWindow";
import { useEffect, useState } from "react";
import { OrdersBasketButtonOpenWindow } from "./orders-basket/OrdersBasketButtonOpenWindow";

export const OrdersBasket = () => {
  const [isActiveWindowProducts, setIsActiveWindowProducts] = useState<boolean>(false);
  const [isAnim, setIsAnim] = useState<boolean>(false);
  const ordersInBasket = useGetOrdersInBasket();

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

  return (
    <>
      <OrdersBasketWindow
        ordersInBasket={ordersInBasket}
        isActiveWindowProducts={isActiveWindowProducts}
        isAnim={isAnim}
      />
      <OrdersBasketButtonOpenWindow
        setIsAnim={setIsAnim}
        isActiveWindowProducts={isActiveWindowProducts}
        ordersInBasket={ordersInBasket}
      />
    </>
  );
};
