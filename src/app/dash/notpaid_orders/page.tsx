"use server";

import { GetListOrdersInPage } from "@/components/client-components/GetListOrdersInPage";
import { EnumPaidStatus } from "@/types/enums";

export default async function NotPaidOrders() {
  return <GetListOrdersInPage isPaidOrder={[EnumPaidStatus.NOT_PAID, EnumPaidStatus.WAITING]} />;
}
