"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const orders = useGetOrdersData();

  return (
    <div className="mx-25">
      {!orders ? (
        <p>Идет загрузка...</p>
      ) : (
        <ul className="max-h-screen overflow-y-auto pr-5">
          {orders?.map(
            ({ id, title, description, isPaid }: IOrders) =>
              isPaid === isPaidOrder && (
                <LiOrder key={id} id={id} title={title} isPaid={isPaid}>
                  {description}
                </LiOrder>
              )
          )}
        </ul>
      )}
    </div>
  );
};
