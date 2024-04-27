import { SocketApiClass } from "@/app/api/socket-api";

import { useCallback, useEffect, useState } from "react";

type array = [{ id: number; title: string; description: string; price: number; isPaid: boolean }];

export const useGetOrdersData = (isTransparent: boolean) => {
  const [state, setState] = useState<array>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.connectionCheck();
    SocketApiClass.getOrders(setState);
  }, [isTransparent]);

  useEffect(() => {
    ConnectionSocket();
  }, []);

  return state;
};
