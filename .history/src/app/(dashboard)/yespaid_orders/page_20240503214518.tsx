"use server";

import { GetListOrdersInPage } from "@/components/client-components/GetListOrdersInPage";

export default async function YesPaidOrders() {
  return (
    <>
      <GetListOrdersInPage isPaidOrder={"paid"} />
    </>
  );
}
