"use server";

import { GetListOrdersInPage } from "@/components/client-components/GetListOrdersInPage";
import type { TPaid } from "@/types/orders.interface";
export default async function YesPaidOrders() {
  return (
    <>
      <GetListOrdersInPage isPaidOrder={"paid"} />
    </>
  );
}
