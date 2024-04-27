"use server";

import { GetListOrdersInPage } from "@/components/client-components/GetListOrdersInPage";

export default async function Lobby() {
  return (
    <>
      <GetListOrdersInPage isPaidOrder={false} />
    </>
  );
}
