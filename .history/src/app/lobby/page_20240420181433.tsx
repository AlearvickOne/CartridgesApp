"use server";

import { LIOrders } from "@/components/widgets/LIOrders";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        <LIOrders></LIOrders>
        <LIOrders></LIOrders>
        <LIOrders></LIOrders>
        <LIOrders></LIOrders>
        <LIOrders></LIOrders>
      </ul>
    </div>
  );
}
