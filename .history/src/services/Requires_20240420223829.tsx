import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { ordersStoreClass } from "@/stores/ordersStore";
import React, { useEffect } from "react";

export const Requires = async () => {
  useEffect(() => {
    getOrders();
  });
};

const getOrders = async () => {
  const { data } = await useGetOrdersData();

  await ordersStoreClass.getOrders(data);
};
