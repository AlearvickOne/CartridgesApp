"use server";

import { GetListOrdersInPage } from "@/components/GetListOrdersInPage";
import { SocketApiClass } from "../api/socket-api";

export default async function Lobby() {
  const orders = await SocketApiClass.getOrders();

  return (
    <>
      <GetListOrdersInPage isPaidOrder={false} />
    </>
  );
}
