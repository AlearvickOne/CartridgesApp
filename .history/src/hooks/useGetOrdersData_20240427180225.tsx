import { SocketApiClass } from "@/app/api/socket-api";

import { useEffect, useState } from "react";

type array = [{ id: number; title: string; description: string; price: number; isPaid: boolean }];

export const useGetOrdersData = () => {
  const [state, setState] = useState<array>();

  useEffect(() => {
    const fn = () => {
      SocketApiClass.connectionCheck();
      const orders = SocketApiClass.getOrders(setState);

      console.log(orders);
    };

    fn();
  }, []);

  return state;
};
