"use server";

import { LiOrder } from "@/components/widgets/LiOrder";

export default async function Lobby() {
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
