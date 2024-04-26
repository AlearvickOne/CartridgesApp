"use server";

import { GetListOrdersInPage } from "@/components/GetListOrdersInPage";
import { SocketApiClass } from "../api/socket-api";

export default async function Lobby() {
  return (
    <>
      <GetListOrdersInPage isPaidOrder={false} orders={orders} />
    </>
  );
}
