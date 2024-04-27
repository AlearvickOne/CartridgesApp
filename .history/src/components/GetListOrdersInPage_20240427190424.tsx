"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { SocketApiClass } from "@/app/api/socket-api";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { useMemo, useState } from "react";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const [isClick, setIsClick] = useState(true);
  const orders = useMemo(() => useGetOrdersData(), [isClick]);

  return (
    <div className="">
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

      <button
        onClick={() => {
          SocketApiClass.createOrder({
            title: "lest6",
            description: "desc6",
            price: 200,
          });
        }}
      >
        Create
      </button>
    </div>
  );
};
