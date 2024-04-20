"use server";

import { LiOrder } from "@/components/widgets/LiOrder";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        <LiOrder title={"Заказ1"}></LiOrder>
        <LiOrder title={"Заказ1"}></LiOrder>
        <LiOrder title={"Заказ1"}></LiOrder>
        <LiOrder title={"Заказ1"}></LiOrder>
        <LiOrder title={"Заказ1"}></LiOrder>
      </ul>
    </div>
  );
}
