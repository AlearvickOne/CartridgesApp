"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";

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
              propsOrder.isPaid === isPaidOrder && <LiOrder {...propsOrder}>{description}</LiOrder>
          )}
        </ul>
      )}
    </div>
  );
};
