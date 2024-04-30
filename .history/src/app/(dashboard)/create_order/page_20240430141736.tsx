"use server";
import { SocketApiClass } from "@/app/api/socket-api";
import { FormCreateOrder } from "@/components/client-components/FormCreateOrder";
import { FormDataNamingOrderClass } from "@/constants/constants";

export default async function CreateOrder() {
  const createOrder = async (formdata: FormData) => {
    "use server";
    const date = new Date(
      formdata.get(FormDataNamingOrderClass.NAME_DATE_ORIGIN_ORDER)!.toString()
    );
    date.getDate();
    console.log(date);
    SocketApiClass.createOrder({
      title: formdata.get(FormDataNamingOrderClass.NAME_TITLE_ORDER)!.toString(),
      description: formdata.get(FormDataNamingOrderClass.NAME_DESC_ORDER)!.toString(),
      price: Number(formdata.get(FormDataNamingOrderClass.NAME_PRICE_ORDER)),
      address: formdata.get(FormDataNamingOrderClass.NAME_ADRESS_CLIENT_ORDER)!.toString(),
      date: new Date(formdata.get(FormDataNamingOrderClass.NAME_DATE_ORIGIN_ORDER)!.toString()),
      image: formdata.get(FormDataNamingOrderClass.NAME_FILES_IMG_ORDER) as File,
    });
  };

  return (
    <div className=" overflow-auto max-h-screen">
      <FormCreateOrder createOrderfn={createOrder} />
    </div>
  );
}
