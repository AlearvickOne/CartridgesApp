"use server";
import { SocketApiClass } from "@/app/api/socket-api";
import { FormCreateOrder } from "@/components/client-components/FormCreateOrder";
import { FormDataNamingOrderClass } from "@/constants/constants";

export default async function CreateOrder() {
  return (
    <div className=" overflow-auto max-h-screen">
      <FormCreateOrder />
    </div>
  );
}

export async function createOrderForm(formdata: FormData) {
  "use server";
  const newDate = new Date(
    formdata.get(FormDataNamingOrderClass.NAME_DATE_ORIGIN_ORDER)!.toString()
  ).toLocaleDateString();

  console.log(formdata.get(FormDataNamingOrderClass.NAME_FILES_IMG_ORDER));

  SocketApiClass.createOrder({
    title: formdata.get(FormDataNamingOrderClass.NAME_TITLE_ORDER)!.toString(),
    description: formdata.get(FormDataNamingOrderClass.NAME_DESC_ORDER)!.toString(),
    price: Number(formdata.get(FormDataNamingOrderClass.NAME_PRICE_ORDER)),
    address: formdata.get(FormDataNamingOrderClass.NAME_ADRESS_CLIENT_ORDER)!.toString(),
    date: newDate,

    image: formdata.get(FormDataNamingOrderClass.NAME_FILES_IMG_ORDER) as File,
  });
}
