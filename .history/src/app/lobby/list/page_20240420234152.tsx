"use server";

import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";

export default async function ListPage() {
  return (
    <div>
      <ul>
        {ordersStoreClass.orders?.map(
          async ({ id, title, description, isPaid }) =>
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
