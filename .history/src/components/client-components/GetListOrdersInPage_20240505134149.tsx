"use client";

import { LiOrder } from "@/components/widgets/orders/LiOrder";
import { IGetListOrderInPage, IOrderNotDesc, IOrders } from "@/types/orders.interface";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { CircularProgress, Skeleton } from "@mui/material";

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
        <div className="flex justify-center items-center min-h-screen">
          <CircularProgress color="secondary" className=" scale-50" />
        </div>

        // <ul className={`max-h-screen overflow-y-auto py-10`}>
        //   {orders?.map(
        //     ({ description, ...propsOrder }: IOrders) =>
        //       check(propsOrder) && (
        //         <LiOrder key={propsOrder.id} {...propsOrder}>
        //           {description}
        //         </LiOrder>
        //       )
        //   )}
        // </ul>
      )}
    </div>
  );
};
