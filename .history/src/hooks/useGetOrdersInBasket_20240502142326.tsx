"use client";
import { SocketApiClass } from "@/app/api/socket-api";
import { IOrderInBasket, IOrderInBasketInArray } from "@/types/orders-basket.interface";

import { useCallback, useEffect, useState } from "react";

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<IOrderInBasket>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.getOrdersFromBasket(setState);
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  console.log(state);

  return state;
};
