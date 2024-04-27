import { SocketApiClass } from "@/app/api/socket-api";

import { useEffect, useState } from "react";

export const useGetOrdersData = () => {
  const [state, setState] = useState<
    [{ id: number; title: string; description: string; price: number; isPaid: boolean }]
  >();

  useEffect(() => {
    let boole = true;

    const fn = async () => {
      const orders = await SocketApiClass.getOrders();
      setState(orders);
      console.log(orders);
    };

    fn();
  }, [SocketApiClass.createOrder()]);

  return state;
};
