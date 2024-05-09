"use client";

import { useGetProfileUser } from "../ProfilesUser/useGetProfileUser";
import { SocketApiClass } from "@/api/socket-api";
import { useState } from "react";

export const useGetOrdersByProvider = () => {
  const [state, setState] = useState();
  const { data, isSuccess } = useGetProfileUser();

  if (isSuccess) {
    SocketApiClass.getSordedOrdersByIdProvider(+data!.id, setState);
    return state;
  }
};
