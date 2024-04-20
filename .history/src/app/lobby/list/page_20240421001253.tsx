"use server";

import { GetListOrdersInPage } from "@/components/GetListOrdersInPage";

export default function ListPage() {
  return (
    <>
      <GetListOrdersInPage isPaidOrder={true} />
    </>
  );
}
