"use client";
import { SocketApiClass } from "@/api/socket-api";
import { IBasket } from "@/types/orders-basket.interface";

import { useEffect, useState } from "react";
import { useGetProfileUser } from "./ProfilesUser/useGetProfileUser";

export const useGetOrdersInBasket = () => {
  const [state, setState] = useState<IBasket>();
  const { data, isSuccess } = useGetProfileUser();

  const ConnectionSocket = () => {
    if (isSuccess === true && data) {
      console.log(isSuccess);
    }
  };
  SocketApiClass.getOrdersFromBasket(setState, data?.id);

  useEffect(() => {
    ConnectionSocket();
  }, [isSuccess]);

  return state?.orders;
};
