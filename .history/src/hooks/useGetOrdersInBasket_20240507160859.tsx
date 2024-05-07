"use client";
import { SocketApiClass } from "@/api/socket-api";
import { IBasket } from "@/types/orders-basket.interface";

import { useCallback, useEffect, useState } from "react";
import { useGetProfileUser } from "./useGetProfileUser";

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<IBasket>();
  const { data } = useGetProfileUser();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.getOrdersFromBasket(setState, data?.id);
  }, []);

  useEffect(() => {
    data !== undefined;
    ConnectionSocket();
  }, []);

  return state?.orders;
};
