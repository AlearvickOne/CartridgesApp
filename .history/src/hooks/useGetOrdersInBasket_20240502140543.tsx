"use client";
import { SocketApiClass } from "@/app/api/socket-api";
import { IOrders } from "@/types/orders.interface";

import { useCallback, useEffect, useState } from "react";

type array = [IOrders];

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<array>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.getOrdersFromBasket();
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state;
};
