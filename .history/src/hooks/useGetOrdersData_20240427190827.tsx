"use client";
import { SocketApiClass } from "@/app/api/socket-api";

import { useCallback, useEffect, useMemo, useState } from "react";

type array = [{ id: number; title: string; description: string; price: number; isPaid: boolean }];

export const useGetOrdersData = () => {
  const [state, setState] = useState<array>();

  const ConnectionSocket = useMemo(() => {
    SocketApiClass.connectionCheck();
    SocketApiClass.getOrders(setState);
    console.log(1);
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, [SocketApiClass.connectionCheck()]);

  return state;
};
