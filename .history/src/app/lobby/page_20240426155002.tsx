"use server";

import { GetListOrdersInPage } from "@/components/GetListOrdersInPage";
import { SocketApiClass } from "../api/socket-api";

export default async function Lobby() {
  await SocketApiClass.getOrders();

  return (
    <>
      <GetListOrdersInPage isPaidOrder={false} />
    </>
  );
}
