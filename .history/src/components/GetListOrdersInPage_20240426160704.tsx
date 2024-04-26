"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";

import { SocketApiClass } from "@/app/api/socket-api";
import { useEffect, useState } from "react";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const { isLoading } = useGetOrdersData();
  const [state, setState] = useState<[]>();

  useEffect(() => {
    const fn = async () => {
      const orders = await SocketApiClass.getOrders();
      setState(orders);
    };

    fn();
  }, []);
  console.log(state);

  return (
    <div className="">
      <button
        onClick={() =>
          SocketApiClass.createOrder({
            title: "lest2",
            description: "desc lets2",
            price: 200,
          })
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
