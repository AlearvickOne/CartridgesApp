"use server";

import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";
import { observer } from "mobx-react";
export default async function Lobby() {
  observer;
  return (
    <div className="">
      <ul>
        {ordersStoreClass.orders?.map(
          async ({ id, title, description, isStatusOrder }) =>
            !isStatusOrder && (
              <LiOrder id={id} title={title} statusOrder={isStatusOrder}>
                {description}
              </LiOrder>
            )
        )}
      </ul>
    </div>
  );
}
