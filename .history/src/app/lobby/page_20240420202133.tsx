"use server";

import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";

export default async function Lobby() {
  await ordersStoreClass.setOrderStatus(1, true);

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
