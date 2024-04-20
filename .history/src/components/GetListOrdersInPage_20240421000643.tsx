import React from "react";

import { LiOrder } from "@/components/widgets/LiOrder";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { IOrders } from "./list/page";

export const GetListOrdersInPage = () => {
  const { data, isLoading } = useGetOrdersData();

  return (
    <div className="">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map(
            ({ id, title, description, isPaid }: IOrders) =>
              isPaid === isPaidOrder && (
                <LiOrder id={id} title={title} isPaid={isPaid}>
                  {description}
                </LiOrder>
              )
          )}
        </ul>
      )}
    </div>
  );
};
