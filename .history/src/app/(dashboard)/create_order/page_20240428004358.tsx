"use server";
import { FormCreateOrder } from "@/components/client-components/FormCreateOrder";

export default async function CreateOrder() {
  const createOrder = async (formdata) => {
    "use server";
    SocketApiClass.createOrder({
      title: formdata.get(nameTitleOrder)!.toString(),
      description: formdata.get(namedescOrder)!.toString(),
      price: Number(formdata.get(namePriceOrder)),
    });
  };

  return (
    <>
      <FormCreateOrder />
    </>
  );
}
