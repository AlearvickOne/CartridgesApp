"use client";

import React,  from "react";

import { LiOrder } from "@/components/widgets/LiOrder";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { useGetOrdersFromSocket } from "@/hooks/useGetOrdersFromSocket";
import { SocketApiClass } from "@/app/api/socket-api";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const { isLoading } = useGetOrdersData();

  const orders = useGetOrdersFromSocket!();

  console.log(orders);

  return (
    <div className="">
      <button
        onClick={() =>
          SocketApiClass.createOrder({ title: "lest1", description: "desc lets1", price: 200 })
        }
      >
        Create
      </button>
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
