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
    isStatusOrder: true,
  },
  {
    title: "Заказ 3",
    description: "Описание заказа 3",
    isStatusOrder: true,
  },
  {
    title: "Заказ 4",
    description: "Описание заказа 4",
    isStatusOrder: true,
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
        <LiOrder title={"Заказ 1"} statusOrder={true}>
          Описание заказа 1
        </LiOrder>
        <LiOrder title={"Заказ 2"} statusOrder={true}>
          Описание заказа 2
        </LiOrder>
        <LiOrder title={"Заказ 3"} statusOrder={true}>
          Описание заказа 3
        </LiOrder>
        <LiOrder title={"Заказ 4"} statusOrder={true}>
          Описание заказа 4
        </LiOrder>
        <LiOrder title={"Заказ 5"} statusOrder={false}>
          Описание заказа 5
        </LiOrder>
      </ul>
    </div>
  );
}
