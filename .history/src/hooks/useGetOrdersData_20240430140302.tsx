"use client";
import { SocketApiClass } from "@/app/api/socket-api";
import { IOrders } from "@/types/orders.interface";

import { useCallback, useEffect, useState } from "react";

type array = [IOrders];

export const useGetOrdersData = () => {
  const [state, setState] = useState<array>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.connectionCheck();
    SocketApiClass.getOrders(setState);
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state;
};
