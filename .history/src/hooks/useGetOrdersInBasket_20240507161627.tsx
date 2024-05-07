"use client";
import { SocketApiClass } from "@/api/socket-api";
import { IBasket } from "@/types/orders-basket.interface";

import { useCallback, useEffect, useState } from "react";
import { useGetProfileUser } from "./useGetProfileUser";

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<IBasket>();
  const { data, isSuccess } = useGetProfileUser();

  const ConnectionSocket = useCallback(() => {
    if (isSuccess === true) {
      SocketApiClass.getOrdersFromBasket(setState, data!.id);
    }
  }, []);

  useEffect(() => {
    ConnectionSocket();
  }, [isSuccess]);

  return state?.orders;
};
