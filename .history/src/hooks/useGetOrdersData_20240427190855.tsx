"use client";
import { SocketApiClass } from "@/app/api/socket-api";

import { useCallback, useEffect, useState } from "react";

type array = [{ id: number; title: string; description: string; price: number; isPaid: boolean }];

export const useGetOrdersData = () => {
  const [state, setState] = useState<array>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.connectionCheck();
    SocketApiClass.getOrders(setState);
    console.log(1);
  }, []);

  ConnectionSocket();
  useEffect(() => {}, [SocketApiClass.connectionCheck()]);

  return state;
};
