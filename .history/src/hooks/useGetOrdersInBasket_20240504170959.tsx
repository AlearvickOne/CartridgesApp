"use client";
import { SocketApiClass } from "@/api/socket-api";
import { IBasket } from "@/types/orders-basket.interface";

import { useCallback, useEffect, useState } from "react";

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<IBasket>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.getOrdersFromBasket(setState);
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state?.orders;
};
