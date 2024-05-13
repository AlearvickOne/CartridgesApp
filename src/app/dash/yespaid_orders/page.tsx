"use server";

import { GetListOrdersInPage } from "@/components/client-components/GetListOrdersInPage";
import { EnumPaidStatus } from "@/types/enums";

export default async function YesPaidOrders() {
  return <GetListOrdersInPage isPaidOrder={EnumPaidStatus.PAID} />;
}
