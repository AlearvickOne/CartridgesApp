"use client";
import { SocketApiClass } from "@/app/api/socket-api";
import { IOrdersInArray } from "@/types/orders.interface";

import { useCallback, useEffect, useState } from "react";

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<IOrderInBasketInArray>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.getOrdersFromBasket(setState);
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state;
};
