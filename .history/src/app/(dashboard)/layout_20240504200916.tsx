"useServer";

import Header from "@/components/server-components/Header";
import { OrdersBasket } from "@/components/widgets/orders-basket/OrdersBasket";

import React, { PropsWithChildren } from "react";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex relative w-full">
      <OrdersBasket />
      <Header handleOut={() => {}} />
      <section className={`px-5 w-[50em] flex justify-center `}>{children}</section>
    </div>
  );
}
