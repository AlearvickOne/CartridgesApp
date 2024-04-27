"use client";

import { LiOrder } from "@/components/widgets/LiOrder";

import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";

import { SocketApiClass } from "@/app/api/socket-api";
import { useEffect, useState } from "react";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const [state, setState] = useState<
    [{ id: number; title: string; description: string; price: number; isPaid: boolean }]
  >();

  useEffect(() => {
    const fn = async () => {
      const orders = await SocketApiClass.getOrders();
      console.log(state);
      setState(orders);
    };

    fn();
  }, [state]);

  return (
    <div className="">
      <button
        onClick={() =>
          SocketApiClass.createOrder({
            title: "lest5",
            description: "desc5",
            price: 200,
          })
        }
      >
        Create
      </button>

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
    </div>
  );
};
