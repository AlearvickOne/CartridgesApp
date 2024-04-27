import { RequiresClass } from "@/services/requires.class";
import { useQuery } from "@tanstack/react-query";

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
