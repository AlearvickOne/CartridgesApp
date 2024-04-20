"use server";

import { GetListOrdersInPage } from "@/components/GetListOrdersInPage";

export default async function ListPage() {
  return (
    <>
      <GetListOrdersInPage isPaidOrder={true} />
    </>
  );
}
