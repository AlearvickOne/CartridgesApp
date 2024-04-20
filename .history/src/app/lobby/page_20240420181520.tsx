"use server";

import { LiOrders } from "@/components/widgets/LiOrders";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        <LiOrders></LiOrders>
        <LiOrders></LiOrders>
        <LiOrders></LiOrders>
        <LiOrders></LiOrders>
        <LiOrders></LiOrders>
      </ul>
    </div>
  );
}
