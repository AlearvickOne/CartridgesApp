import { SocketApiClass } from "@/app/api/socket-api";

import { useEffect, useState } from "react";

type array = [{ id: number; title: string; description: string; price: number; isPaid: boolean }];

export const useGetOrdersData = () => {
  const [state, setState] = useState<array>();

  const ConnectionSocket = () => {
    SocketApiClass.connectionCheck();
    SocketApiClass.getOrders(setState);
    console.log(state);
  };

  useEffect(() => {
    ConnectionSocket();
  }, [setState]);

  return state;
};
