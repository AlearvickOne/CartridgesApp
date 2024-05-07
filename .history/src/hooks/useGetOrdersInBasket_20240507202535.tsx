"use client";
import { SocketApiClass } from "@/api/socket-api";
import { IBasket } from "@/types/orders-basket.interface";

import { useEffect, useState } from "react";
import { useGetProfileUser } from "./ProfilesUser/useGetProfileUser";

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<IBasket>();
  const { data, isLoading, isSuccess } = useGetProfileUser();

  const ConnectionSocket = () => {
    if (isSuccess) {
      SocketApiClass.getOrdersFromBasket(setState, data?.id);
      console.log(isSuccess);
    }
  };

  useEffect(() => {
    ConnectionSocket();
  }, [isSuccess]);

  return state?.orders;
};
