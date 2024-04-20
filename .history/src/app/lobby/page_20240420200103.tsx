"use server";

import { ButtonLink } from "@/components/widgets/ButtonLink";
import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";
import { boolean } from "zod";

export default async function Lobby() {
  const setOrderStatus = async (id: string | number, isStatusOrder: boolean) => {
    "use server";
    await ordersStoreClass.setOrderStatus(id, isStatusOrder);
  };

  return (
    <div className="">
      <ul>
        {ordersStoreClass.orders?.map(
          async ({ id, title, description, isStatusOrder }) =>
            !isStatusOrder && (
              <>
                <ButtonLink fnOnClick={setOrderStatus(id, isStatusOrder)}>GO</ButtonLink>
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
