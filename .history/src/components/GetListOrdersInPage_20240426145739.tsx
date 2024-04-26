"use client";

import React from "react";

import { LiOrder } from "@/components/widgets/LiOrder";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { SocketApiClass } from "@/app/api/socket-api";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const { data, isLoading } = useGetOrdersData();

  const orders = SocketApiClass.getOrders();

  return (
    <div className="">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {orders?.map(
            ({ id, title, description, isPaid }: IOrders) =>
              isPaid === isPaidOrder && (
                <LiOrder key={id} id={id} title={title} isPaid={isPaid}>
                  {description}
                </LiOrder>
              )
          )}
        </ul>
      )}
    </div>
  );
};
