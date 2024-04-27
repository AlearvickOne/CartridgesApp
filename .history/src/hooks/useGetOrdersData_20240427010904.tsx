import { SocketApiClass } from "@/app/api/socket-api";

import { useEffect, useState } from "react";

type array = [{ id: number; title: string; description: string; price: number; isPaid: boolean }];

export const useGetOrdersData = () => {
  const [state, setState] = useState<array>();

  useEffect(() => {
    const fn = async () => {
      const orders = await SocketApiClass.getOrders();
      setState(orders);

      console.log(orders);
    };

    fn();
  }, []);

  return state;
};
