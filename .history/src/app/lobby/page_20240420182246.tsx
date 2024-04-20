"use server";

import { LiOrder } from "@/components/widgets/LiOrder";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        <LiOrder title={"Заказ 1"}>Описание заказа 1</LiOrder>
        <LiOrder title={"Заказ 2"}>Описание заказа 2</LiOrder>
        <LiOrder title={"Заказ 3"}>Описание заказа 3</LiOrder>
        <LiOrder title={"Заказ 4"}>Описание заказа 4</LiOrder>
        <LiOrder title={"Заказ 5"}>Описание заказа 5</LiOrder>
      </ul>
    </div>
  );
}
