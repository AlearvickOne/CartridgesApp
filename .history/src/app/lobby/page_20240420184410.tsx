"use server";

import { LiOrder } from "@/components/widgets/LiOrder";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        {orders.map(
          ({ title, description, isStatusOrder }) =>
            !isStatusOrder && (
              <LiOrder title={title} statusOrder={isStatusOrder}>
                {description}
              </LiOrder>
            )
        )}
      </ul>
    </div>
  );
}
