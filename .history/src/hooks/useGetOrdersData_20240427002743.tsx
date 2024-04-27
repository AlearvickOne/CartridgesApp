import { SocketApiClass } from "@/app/api/socket-api";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useGetOrdersData = (
  isUpdate: boolean,
  setUpdate: Dispatch<SetStateAction<boolean>>
) => {
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
    setUpdate(false);
  }, [isUpdate]);

  return state;
};
