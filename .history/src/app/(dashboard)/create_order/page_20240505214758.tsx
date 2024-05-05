"use server";
import { SocketApiClass } from "@/api/socket-api";
import { zodValid } from "@/api/zod-valid";
import { FormCreateOrder } from "@/components/client-components/FormCreateOrder";
import { FormDataNamingOrderClass } from "@/constants/constants";
import { ZodError } from "zod";

export default async function CreateOrder() {
  async function createOrderForm(formdata: FormData) {
    "use server";

    try {
      // Так сделано, потому что дата не правильно выводится в бэке
      const newDate = new Date(
        formdata.get(FormDataNamingOrderClass.NAME_DATE_ORIGIN_ORDER)!.toString()
      )
        .toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, ".");

      // Валидация
      const valid = zodValid.parse({
        title: formdata.get(FormDataNamingOrderClass.NAME_TITLE_ORDER)!,
        price: formdata.get(FormDataNamingOrderClass.NAME_DESC_ORDER)!,
      });

      SocketApiClass.createOrder({
        title: valid.title.toString(),
        description: valid.price.toString(),
        price: Number(formdata.get(FormDataNamingOrderClass.NAME_PRICE_ORDER)),
        address: formdata.get(FormDataNamingOrderClass.NAME_ADRESS_CLIENT_ORDER)!.toString(),
        date: newDate,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const errorValid = error.message[1];
        throw new Error(errorValid);
      }
    }
  }

  return (
    <div className=" overflow-auto max-h-screen p-10">
      <FormCreateOrder createOrderForm={createOrderForm} />
    </div>
  );
}
