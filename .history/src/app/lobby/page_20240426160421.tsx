"use server";

import { GetListOrdersInPage } from "@/components/GetListOrdersInPage";

export default async function Lobby() {
  return (
    <>
      <GetListOrdersInPage isPaidOrder={false} orders={orders} />
    </>
  );
}
