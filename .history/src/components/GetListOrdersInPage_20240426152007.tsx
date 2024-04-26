"use client";

import React from "react";

import { LiOrder } from "@/components/widgets/LiOrder";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { useGetOrdersFromSocket } from "@/hooks/useGetOrdersFromSocket";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const { isLoading } = useGetOrdersData();

  const orders = useGetOrdersFromSocket!();

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
