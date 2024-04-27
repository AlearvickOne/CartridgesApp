"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { SocketApiClass } from "@/app/api/socket-api";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { useCallback, useState } from "react";
type array = [{ id: number; title: string; description: string; price: number; isPaid: boolean }];

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const [state, setState] = useState<array>();

  const ConnectionSocket = useCallback(() => {
    SocketApiClass.connectionCheck();
    SocketApiClass.getOrders(setState);
    console.log(1);
  }, []);

  return (
    <div className="">
      <ul>
        {state?.map(
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
