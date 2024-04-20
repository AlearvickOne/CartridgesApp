"use server";

import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        {ordersStoreClass.orders?.map(
          ({ id, title, description, isPaid }) => (
            <LiOrder id={id} title={"name"} isPaid={isPaid}>
              {description}
            </LiOrder>
          )
          // !isPaid && (
          // )
        )}
      </ul>
    </div>
  );
}
