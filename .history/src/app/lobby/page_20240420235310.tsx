"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { IOrders, ordersStoreClass } from "@/stores/ordersStore";
import { useEffect } from "react";

export default function Lobby() {
  const { data, isLoading } = useGetOrdersData();

  // useEffect(() => {
  //   ordersStoreClass.getOrders();
  // }, []);

  return (
    <div className="">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map(
            ({ id, title, description, isPaid }: IOrders) =>
              !isPaid && (
                <LiOrder id={id} title={title} isPaid={isPaid}>
                  {description}
                </LiOrder>
              )
          )}
        </ul>
      )}
    </div>
  );
}
