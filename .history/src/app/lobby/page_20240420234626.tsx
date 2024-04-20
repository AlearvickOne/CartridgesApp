"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";
import { useEffect } from "react";

export default function Lobby() {
  useEffect(() => {
    ordersStoreClass.getOrders();
  }, []);

  return (
    <div className="">
      <ul>
        {ordersStoreClass.orders?.map(
          ({ id, title, description, isPaid }) =>
            !isPaid && (
              <LiOrder id={id} title={title} isPaid={isPaid}>
                {description}
              </LiOrder>
            )
        )}
      </ul>
    </div>
  );
}
