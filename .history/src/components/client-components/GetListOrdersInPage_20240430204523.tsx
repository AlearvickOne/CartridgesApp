"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import stylesScroll from "@/styles/styles-customScroll.module.scss";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const orders = useGetOrdersData();

  return (
    <div>
      {!orders ? (
        <p>Идет загрузка...</p>
      ) : (
        <ul className={`max-h-screen overflow-y-auto py-10   ${stylesScroll.customScroll}`}>
          {orders?.map(
            ({ description, ...propsOrder }: IOrders) =>
              propsOrder.isPaid === isPaidOrder && <LiOrder {...propsOrder}>{description}</LiOrder>
          )}
        </ul>
      )}
    </div>
  );
};
