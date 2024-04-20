"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import { ordersStoreClass } from "@/stores/ordersStore";

export default function ListPage() {
  const { data, isLoading } = useGetOrdersData();

  return (
    <div>
      {isLoading ? <p>Loading...</p>}
      <ul>
        {ordersStoreClass.orders?.map(
          async ({ id, title, description, isPaid }) =>
            isPaid && (
              <LiOrder id={id} title={title} isPaid={isPaid}>
                {description}
              </LiOrder>
            )
        )}
      </ul>
    </div>
  );
}
