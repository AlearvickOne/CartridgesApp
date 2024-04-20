"use client";

import { GetListOrdersInPage } from "@/components/GetListOrdersInPage";

export default function Lobby(isPaidOrder: boolean) {
  return (
    <>
      <GetListOrdersInPage isPaidOrder={false} />
    </>
  );
}
