"use client";

import { LiOrder } from "@/components/widgets/orders/LiOrder";
import { IGetListOrderInPage, IOrderNotDesc, IOrders } from "@/types/orders.interface";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const orders = useGetOrdersData();

  const check = (propsOrder: IOrderNotDesc) => {
    if (Array.isArray(isPaidOrder))
      return propsOrder.isPaid === isPaidOrder[0] || propsOrder.isPaid === isPaidOrder[1];
    else return propsOrder.isPaid === isPaidOrder;
  };

  return (
    <div>
      {!orders ? (
        <p>Идет загрузка...</p>
      ) : (
        <ul className={`max-h-screen overflow-y-auto py-10 px-2 `}>
          {orders?.map(
            ({ description, ...propsOrder }: IOrders) =>
              check(propsOrder) && (
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
