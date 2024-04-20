"use server";

import { ButtonLink } from "@/components/widgets/ButtonLink";
import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";
import { boolean } from "zod";

export default async function Lobby() {
  const setOrderStatus = async () => {
    await ordersStoreClass.setOrderStatus(1, true);
  };

  return (
    <div className="">
      <ul>
        {ordersStoreClass.orders?.map(
          async ({ id, title, description, isStatusOrder }) =>
            !isStatusOrder && (
              <>
                <ButtonLink fnOnClick={setOrderStatus}>GO</ButtonLink>
                <LiOrder id={id} title={title} statusOrder={isStatusOrder}>
                  {description}
                </LiOrder>
              </>
            )
        )}
      </ul>
    </div>
  );
}
