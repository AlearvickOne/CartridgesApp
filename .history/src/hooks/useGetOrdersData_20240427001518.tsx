import { SocketApiClass } from "@/app/api/socket-api";

import { useCallback, useEffect, useState } from "react";

export const useGetOrdersData = () => {
  const [state, setState] = useState<
    [{ id: number; title: string; description: string; price: number; isPaid: boolean }]
  >();
  const [isUpdate, setUpdate] = useState();

  useEffect(() => {
    const fn = useCallback(async () => {
      const orders = await SocketApiClass.getOrders();
      setState(orders);
      console.log(orders);
    }, []);

    fn();)
  }, []);

  return state;
};
