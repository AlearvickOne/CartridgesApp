import { SocketApiClass } from "@/app/api/socket-api";
import { RequiresClass } from "@/services/requires.class";

import { useEffect } from "react";

export const useGetOrdersData = () => {
  useEffect(() => {
    const fn = async () => {
      const orders = await SocketApiClass.getOrders();
      setState(orders);
      console.log(state);
    };

    fn();
  }, [state]);
};
