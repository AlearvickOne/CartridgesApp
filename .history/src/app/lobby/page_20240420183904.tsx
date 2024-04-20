"use server";

import { LiOrder } from "@/components/widgets/LiOrder";

const orders = [
  {
    title: "Заказ 1",
    description: "Описание заказа 1",
    isStatusOrder: true,
  },
  {
    title: "Заказ 2",
    description: "Описание заказа 2",
    isStatusOrder: false,
  },
  {
    title: "Заказ 3",
    description: "Описание заказа 3",
    isStatusOrder: false,
  },
  {
    title: "Заказ 4",
    description: "Описание заказа 4",
    isStatusOrder: false,
  },
  {
    title: "Заказ 5",
    description: "Описание заказа 5",
    isStatusOrder: true,
  },
];

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        {orders.map(({ title, description, isStatusOrder }) => (
          <LiOrder title={title} statusOrder={isStatusOrder}>
            {description}
          </LiOrder>
        ))}
      </ul>
    </div>
  );
}
