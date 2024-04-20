"use client";

import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { ordersStoreClass } from "@/stores/ordersStore";
import React, { useEffect } from "react";

export const Requires = () => {
  getOrders();
  return (
    <>
      <button></button>
    </>
  );
};

const getOrders = async () => {
  const { data } = await useGetOrdersData();

  console.log(data);
  await ordersStoreClass.getOrders(data);
};
