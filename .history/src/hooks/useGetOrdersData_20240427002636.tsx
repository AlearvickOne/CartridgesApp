import { SocketApiClass } from "@/app/api/socket-api";

import { useEffect, useState } from "react";

export const useGetOrdersData = (isUpdate: boolean, setUpdate:) => {
  const [state, setState] = useState<
    [{ id: number; title: string; description: string; price: number; isPaid: boolean }]
  >();

  useEffect(() => {
    const fn = async () => {
      const orders = await SocketApiClass.getOrders();
      setState(orders);
      console.log(orders);
    };

    fn();
    // setUpdate(false);
  }, []);

  return state;
};
