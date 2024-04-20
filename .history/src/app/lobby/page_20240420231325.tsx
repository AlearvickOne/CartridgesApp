"use server";

import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        {ordersStoreClass.orders?.map(
          !isPaid &&
            (({ id, title, description, isPaid }) => (
              <LiOrder id={id} title={title} isPaid={isPaid}>
                {description}
              </LiOrder>
            ))
        )}
      </ul>
    </div>
  );
}
