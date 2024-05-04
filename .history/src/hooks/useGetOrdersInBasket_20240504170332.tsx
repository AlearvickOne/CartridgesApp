"use client";
import { SocketApiClass } from "@/api/socket-api";
import { IOrderInBasket } from "@/types/orders-basket.interface";

import { useCallback, useEffect, useState } from "react";

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<IOrderInBasket>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.getOrdersFromBasket(setState);
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state;
};
