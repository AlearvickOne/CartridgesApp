"use client";
import { SocketApiClass } from "@/app/api/socket-api";
import { IOrders } from "@/types/orders.interface";

import { useCallback, useEffect, useState } from "react";

type array = [IOrders];

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<IOrders>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.getOrdersFromBasket(setState);
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state;
};
