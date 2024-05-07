"use client";
import { SocketApiClass } from "@/api/socket-api";
import { IBasket } from "@/types/orders-basket.interface";

import { useEffect, useState } from "react";
import { useGetProfileUser } from "./ProfilesUser/useGetProfileUser";

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<IBasket>();
  const { data, isLoading } = useGetProfileUser();

  const ConnectionSocket = () => {
    if (isLoading === true) {
      SocketApiClass.getOrdersFromBasket(setState, data!.id);
      console.log(isLoading);
    }
  };

  useEffect(() => {
    ConnectionSocket();
  }, [isLoading]);

  return state?.orders;
};
