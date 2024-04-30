"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { IGetListOrderInPage, ILiOrder, IOrders } from "@/types/orders.interface";
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
            ({ id, title, price, description, isPaid, address, date, image }: ILiOrder) =>
              isPaid === isPaidOrder && <LiOrder key={id}>{description}</LiOrder>
          )}
        </ul>
      )}
    </div>
  );
};
