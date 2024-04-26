"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";

import { SocketApiClass } from "@/app/api/socket-api";

export const GetListOrdersInPage = ({ isPaidOrder, orders }: IGetListOrderInPage) => {
  const { isLoading } = useGetOrdersData();

  console.log(orders);

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
