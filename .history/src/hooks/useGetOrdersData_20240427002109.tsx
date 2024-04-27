import { SocketApiClass } from "@/app/api/socket-api";

import { useEffect, useState } from "react";

export const useGetOrdersData = React.memo(() => {
  const [state, setState] = useState<
    [{ id: number; title: string; description: string; price: number; isPaid: boolean }]
  >();
  // const [isUpdate, setUpdate] = useState(true);

  // setUpdate(true);
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
});
