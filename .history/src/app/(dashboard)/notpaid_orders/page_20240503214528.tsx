"use server";

import { GetListOrdersInPage } from "@/components/client-components/GetListOrdersInPage";

export default async function NotPaidOrders() {
  return <GetListOrdersInPage isPaidOrder={"notPaid"} />;
}
