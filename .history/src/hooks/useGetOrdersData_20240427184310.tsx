import { SocketApiClass } from "@/app/api/socket-api";

import { useCallback, useEffect, useState } from "react";

type array = [{ id: number; title: string; description: string; price: number; isPaid: boolean }];

export const useGetOrdersData = () => {
  const [state, setState] = useState<array>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.connectionCheck();
    SocketApiClass.getOrders(setState);
  }, [state]);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state;
};
