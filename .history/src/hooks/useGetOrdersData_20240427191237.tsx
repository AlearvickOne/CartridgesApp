"use client";
import { SocketApiClass } from "@/app/api/socket-api";

import { useCallback, useEffect, useState } from "react";

export const useGetOrdersData = () => {
  const [state, setState] = useState<array>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.connectionCheck();
    SocketApiClass.getOrders(setState);
    console.log(1);
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state;
};
