"use server";
import { SocketApiClass } from "@/api/socket-api";
import { FormCreateOrder } from "@/components/client-components/FormCreateOrder";
import { FormDataNamingOrderClass } from "@/constants/constants";

export default async function CreateOrder() {
  async function createOrderForm(formdata: FormData) {
    "use server";

    const newDate = new Date(
      formdata.get(FormDataNamingOrderClass.NAME_DATE_ORIGIN_ORDER)!.toString()
    );
    const getDate = {
      year: newDate.getFullYear(),
      month: newDate.getMonth(),
      day: newDate.getDay(),
    };

    console.log(`${getDate.day} ${getDate.month} ${getDate.year}`);

    SocketApiClass.createOrder({
      title: formdata.get(FormDataNamingOrderClass.NAME_TITLE_ORDER)!.toString(),
      description: formdata.get(FormDataNamingOrderClass.NAME_DESC_ORDER)!.toString(),
      price: Number(formdata.get(FormDataNamingOrderClass.NAME_PRICE_ORDER)),
      address: formdata.get(FormDataNamingOrderClass.NAME_ADRESS_CLIENT_ORDER)!.toString(),
      date: `${getDate.day}/${getDate.month}/${getDate.year}`,
    });
  }

  return (
    <div className=" overflow-auto max-h-screen p-10">
      <FormCreateOrder createOrderForm={createOrderForm} />
    </div>
  );
}