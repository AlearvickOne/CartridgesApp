"use server";

import { LiOrder } from "@/components/widgets/LiOrders";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        <LiOrder></LiOrder>
        <LiOrder></LiOrder>
        <LiOrder></LiOrder>
        <LiOrder></LiOrder>
        <LiOrder></LiOrder>
      </ul>
    </div>
  );
}
