"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";

export interface IOrders {
  id: string | number;
  title: string;
  description: string;
  isPaid: boolean;
}
export default function ListPage() {
  const { data, isLoading } = useGetOrdersData();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(
            ({ id, title, description, isPaid }: IOrders) =>
              isPaid && (
                <LiOrder id={id} title={title} isPaid={isPaid}>
                  {description}
                </LiOrder>
              )
          )}
        </ul>
      )}
    </div>
  );
}
