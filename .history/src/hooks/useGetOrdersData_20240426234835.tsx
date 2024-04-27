import { SocketApiClass } from "@/app/api/socket-api";

import { useEffect, useState } from "react";

export const useGetOrdersData = () => {
  const [state, setState] = useState<
    [{ id: number; title: string; description: string; price: number; isPaid: boolean }]
  >();

  useEffect(() => {
    const fn = async () => {
      const orders = await SocketApiClass.getOrders();
      setState(orders);
    };

    fn();
  }, [setState]);

  return state;
};
