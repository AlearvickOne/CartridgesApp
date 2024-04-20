"use server";

import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";

export default async function ListPage() {
  console.log("111");
  return (
    <div>
      <ul>
        {ordersStoreClass.orders?.map(
          ({ id, title, description, isPaid }) =>
            isPaid && (
              <LiOrder id={id} title={title} isPaid={isPaid}>
                {description}
              </LiOrder>
            )
        )}
      </ul>
    </div>
  );
}
