"use client";

import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { ordersStoreClass } from "@/stores/ordersStore";
import React, { useEffect } from "react";

export const Requires = () => {
  getOrders();
  return <></>;
};

const getOrders = async () => {
  useEffect((){
    const { data } = useGetOrdersData();
  
    await ordersStoreClass.getOrders(data);

  }, [])
  console.log(ordersStoreClass.orders);
};
