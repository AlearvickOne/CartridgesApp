"use client";
import { observer } from "mobx-react-lite";

import { LiOrder } from "@/components/widgets/orders/LiOrder";
import {
  IGetListOrderInPage,
  IOrderNotDesc,
  IOrders,
  IOrdersInArray,
} from "@/types/orders.interface";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { CircularProgress } from "@mui/material";
import { useGetOrdersByProvider } from "@/hooks/orders/useGetOrdersByProvider";
import { CheckBoxOrderProviderStore } from "@/stores/checkBoxOrderProviderStore";
import { EnumPaidStatus } from "@/types/enums";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const orders = useGetOrdersData();
  const ordersByProvider = useGetOrdersByProvider(orders);
  return (
    <div>
      {!orders ? (
        <div className="flex justify-center items-center min-h-screen ">
          <CircularProgress color="warning" size={100} />
        </div>
      ) : (
        <GetElements
          ordersByProvider={ordersByProvider}
          orders={orders}
          isPaidOrder={isPaidOrder}
        />
      )}
    </div>
  );
};

// ----------------------------------

interface IGetElements {
  ordersByProvider: IOrders[] | undefined;
  orders: IOrdersInArray | undefined;
  isPaidOrder: EnumPaidStatus | EnumPaidStatus[];
}

const GetElements = observer(({ ordersByProvider, orders, isPaidOrder }: IGetElements) => {
  const check = (propsOrder: IOrderNotDesc) => {
    if (Array.isArray(isPaidOrder))
      return propsOrder.isPaid === isPaidOrder[0] || propsOrder.isPaid === isPaidOrder[1];
    else return propsOrder.isPaid === isPaidOrder;
  };

  return (
    <ul className={`min-h-screen overflow-y-auto py-10 mt-10 md:mt-0`}>
      {(CheckBoxOrderProviderStore.isClickProviderCheckBox ? ordersByProvider : orders)?.map(
        ({ description, ...propsOrder }: IOrders) =>
          check(propsOrder) && (
            <LiOrder key={propsOrder.id} {...propsOrder}>
              {description}
            </LiOrder>
          )
      )}
    </ul>
  );
});
