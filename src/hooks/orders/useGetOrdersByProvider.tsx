"use client";

import { useGetProfileUser } from "../ProfilesUser/useGetProfileUser";
import { SocketApiClass } from "@/api/socket-api";
import { IOrders, IOrdersInArray } from "@/types/orders.interface";
import { useEffect, useState } from "react";

export const useGetOrdersByProvider = (orders: IOrdersInArray | undefined) => {
  const [state, setState] = useState<IOrders[]>();
  const { data } = useGetProfileUser();

  useEffect(() => {
    if (data) {
      SocketApiClass.getSordedOrdersByIdProvider(+data!.id, setState);
    }
  }, [orders]);

  return state;
};
