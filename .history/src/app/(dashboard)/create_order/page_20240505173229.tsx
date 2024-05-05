"use server";
import { SocketApiClass } from "@/api/socket-api";
import { FormCreateOrder } from "@/components/client-components/FormCreateOrder";
import { FormDataNamingOrderClass } from "@/constants/constants";

export default async function CreateOrder() {
  async function createOrderForm(formdata: FormData) {
    "use server";

    const newDate = new Date(
      formdata.get(FormDataNamingOrderClass.NAME_DATE_ORIGIN_ORDER)!.toString()
    )
      .toISOString()
      .split("T")[0];

    const dateComponents = newDate.split("-");
    const rearrangedDate = dateComponents[1] + "-" + dateComponents[2] + "-" + dateComponents[0];

    SocketApiClass.createOrder({
      title: formdata.get(FormDataNamingOrderClass.NAME_TITLE_ORDER)!.toString(),
      description: formdata.get(FormDataNamingOrderClass.NAME_DESC_ORDER)!.toString(),
      price: Number(formdata.get(FormDataNamingOrderClass.NAME_PRICE_ORDER)),
      address: formdata.get(FormDataNamingOrderClass.NAME_ADRESS_CLIENT_ORDER)!.toString(),
      date: newDate.toISOString().split("T")[0],
    });
  }

  return (
    <div className=" overflow-auto max-h-screen p-10">
      <FormCreateOrder createOrderForm={createOrderForm} />
    </div>
  );
}
