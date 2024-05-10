"use client";

import { SocketApiClass } from "@/api/socket-api";
import { StoreDataUser } from "@/stores/StoreDataUser";
import { IOrders, IOrdersInArray } from "@/types/orders.interface";
import { useEffect, useState } from "react";

export const useGetOrdersByProvider = (orders: IOrdersInArray | undefined) => {
  const [state, setState] = useState<IOrders[]>();

  useEffect(() => {
    if (StoreDataUser.data) {
      SocketApiClass.getSordedOrdersByIdProvider(+StoreDataUser.data.id, setState);
    }
  }, [orders]);

  return state;
};
