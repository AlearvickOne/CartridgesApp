"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";

import { useEffect } from "react";
import { IOrders } from "./list/page";

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
