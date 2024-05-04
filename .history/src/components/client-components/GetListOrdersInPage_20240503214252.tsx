"use client";

import { LiOrder } from "@/components/widgets/orders/LiOrder";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import type { TPaid } from "@/types/orders.interface";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const orders = useGetOrdersData();

  return (
    <div>
      {!orders ? (
        <p>Идет загрузка...</p>
      ) : (
        <ul className={`max-h-screen overflow-y-auto py-10 `}>
          {orders?.map(
            ({ description, ...propsOrder }: IOrders) =>
              propsOrder.isPaid === TPaid && (
                <LiOrder key={propsOrder.id} {...propsOrder}>
                  {description}
                </LiOrder>
              )
          )}
        </ul>
      )}
    </div>
  );
};
