"use server";

import { GetListOrdersInPage } from "@/components/GetListOrdersInPage";

export default function Lobby() {
  return (
    <>
      <GetListOrdersInPage isPaidOrder={false} />
    </>
  );
}
