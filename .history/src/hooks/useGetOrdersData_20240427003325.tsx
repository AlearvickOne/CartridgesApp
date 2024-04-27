import { SocketApiClass } from "@/app/api/socket-api";

import { useEffect, useState } from "react";

export const useGetOrdersData = () => {
  const [state, setState] = useMemo(
    () =>
      useState<
        [{ id: number; title: string; description: string; price: number; isPaid: boolean }]
      >(),
    []
  );

  useEffect(() => {
    let reverse = true;

    const fn = async () => {
      const orders = await SocketApiClass.getOrders();
      setState(orders);
      reverse = false;
      console.log(orders);
    };

    fn();
  }, [reverse]);

  return state;
};
