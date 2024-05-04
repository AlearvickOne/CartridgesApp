"use client";

import { LiOrder } from "@/components/widgets/orders/LiOrder";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const orders = useGetOrdersData();

  const check = (propsOrder: IOrders) => {
    if (Array.isArray(isPaidOrder))
      return propsOrder.isPaid === isPaidOrder[0] || propsOrder.isPaid === isPaidOrder[1];
    else return propsOrder.isPaid === isPaidOrder;
  };

  return (
    <div>
      {!orders ? (
        <p>Идет загрузка...</p>
      ) : (
        <ul className={`max-h-screen overflow-y-auto py-10 `}>
          {orders?.map(
            ({ description, ...propsOrder }: IOrders) =>
              check() && (
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
