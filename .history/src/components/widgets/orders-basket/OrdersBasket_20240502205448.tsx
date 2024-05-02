"use client";

import { OrdersBasketWindow } from "./OrdersBasketWindow";
import { useEffect, useState } from "react";
import { OrdersBasketButtonOpenWindow } from "./OrdersBasketButtonOpenWindow";

export const OrdersBasket = () => {
  const [isActiveWindowProducts, setIsActiveWindowProducts] = useState<boolean>(false);
  const [isAnim, setIsAnim] = useState<boolean>(false);

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
    <div>
      <OrdersBasketWindow isActiveWindowProducts={isActiveWindowProducts} isAnim={isAnim} />
      <OrdersBasketButtonOpenWindow
        setIsAnim={setIsAnim}
        isActiveWindowProducts={isActiveWindowProducts}
      />
    </div>
  );
};
