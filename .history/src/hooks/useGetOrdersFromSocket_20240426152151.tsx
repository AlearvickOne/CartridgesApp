import { SocketApiClass } from "@/app/api/socket-api";
import { useEffect, useState } from "react";

export const useGetOrdersFromSocket = () => {
  const [orders, setOrders] = useState<[] | undefined>();

  useEffect(() => {
    SocketApiClass.getOrders(setOrders);
  }, []);

  return orders;
};
