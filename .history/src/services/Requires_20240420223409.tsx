import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { ordersStoreClass } from "@/stores/ordersStore";
import React from "react";

export const Requires = () => {
  getOrders();
};

const getOrders = async () => {
  const { data } = await useGetOrdersData();

  await ordersStoreClass.getOrders(data);
};
