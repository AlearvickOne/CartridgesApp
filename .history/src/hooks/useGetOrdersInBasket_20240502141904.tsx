"use client";
import { SocketApiClass } from "@/app/api/socket-api";
import { IOrderInBasketInArray } from "@/types/orders-basket.interface";

import { useCallback, useEffect, useState } from "react";

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<[IOrderInBasketInArray]>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.getOrdersFromBasket(setState);
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state;
};
