import { SocketApiClass } from "@/app/api/socket-api";
import { RequiresClass } from "@/services/requires.class";

import { useEffect } from "react";

export const useGetOrdersData = () => {
  const [state, setState] = useState<
    [{ id: number; title: string; description: string; price: number; isPaid: boolean }]
  >();

  useEffect(() => {
    const fn = async () => {
      const orders = await SocketApiClass.getOrders();
      setState(orders);
      console.log(state);
    };

    fn();
  }, [state]);
};
