"use client";

import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { ordersStoreClass } from "@/stores/ordersStore";
import React, { useEffect } from "react";

export const Requires = () => {
  useEffect(() => {
    const getOrders = async () => {
      const { data } = await useGetOrdersData();

      await ordersStoreClass.getOrders(data);
    };

    getOrders();
  });
  return (
    <>
      <button></button>
    </>
  );
};
