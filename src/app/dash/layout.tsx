"useServer";

import Header from "@/components/client-components/Header";
import { OrdersBasket } from "@/components/widgets/orders-basket/OrdersBasket";

import React, { PropsWithChildren } from "react";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex relative justify-between w-full max-w-[1366px]">
      <OrdersBasket />
      <Header />
      <section className={`px-5 w-screen md:w-[50em] `}>{children}</section>
    </div>
  );
}
