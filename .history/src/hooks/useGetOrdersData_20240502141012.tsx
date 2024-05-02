"use client";
import { SocketApiClass } from "@/app/api/socket-api";
import { IOrdersInArray } from "@/types/orders.interface";

import { useCallback, useEffect, useState } from "react";

export const useGetOrdersData = () => {
  const [state, setState] = useState<IOrdersInArray>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.getOrders(setState);
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state;
};
