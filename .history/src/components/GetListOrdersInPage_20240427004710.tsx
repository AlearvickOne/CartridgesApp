"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { SocketApiClass } from "@/app/api/socket-api";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { useState } from "react";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const orders = useGetOrdersData();
  const [clickTrigger, setClickTrigger] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => {
          setClickTrigger(!clickTrigger);
          SocketApiClass.createOrder({
            title: "lest6",
            description: "desc6",
            price: 200,
          });
        }}
      >
        Create
      </button>

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
    </div>
  );
};
