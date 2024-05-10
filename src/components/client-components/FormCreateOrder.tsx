"use client";

import { FormDataNamingOrderClass } from "@/constants/constants";
import { useState } from "react";
import { IFormCreateOrder } from "@/types/orders.interface";
import { useCheckConnectSocketStatus } from "@/hooks/useCheckConnectSocketStatus";
import { zodValid } from "@/api/zod-valid";
import { ZodError } from "zod";
import { EnumFormCreateStatus } from "@/types/enums";
import { TitleTextCreateOrderForm } from "../widgets/create_orders/TitleTextCreateOrderForm";
import { PriceTextCreateOrderForm } from "../widgets/create_orders/PriceTextCreateOrderForm";
import { AddressTextCreateOrderForm } from "../widgets/create_orders/AddressTextCreateOrderForm";
import { DescriptionTextCreateOrderForm } from "../widgets/create_orders/DescriptionTextCreateOrderForm";
import { DateCreateOrderForm } from "../widgets/create_orders/DateCreateOrderForm";
import { ButtonViolet } from "../widgets/ButtonViolet";
import { useGetProfileUser } from "@/hooks/ProfilesUser/useGetProfileUser";

export const FormCreateOrder = ({ createOrderForm }: IFormCreateOrder) => {
  const [statusSubmit, setStatusSubmit] = useState<EnumFormCreateStatus>(
    EnumFormCreateStatus.NO_STATUS
  );

  const statusConnect = useCheckConnectSocketStatus();
  const currentUser = useGetProfileUser();

  // ---------------------------------------------------------
  const submitForm = async (formdata: FormData) => {
    try {
      if (statusConnect === "connected") {
        zodValid.parse({
          title: formdata.get(FormDataNamingOrderClass.NAME_TITLE_ORDER)!,
          price: formdata.get(FormDataNamingOrderClass.NAME_DESC_ORDER)!,
        });
        createOrderForm(+currentUser.data!.id, formdata);
        setStatusSubmit(EnumFormCreateStatus.SUBMIT);
      } else setStatusSubmit(EnumFormCreateStatus.ERROR);
    } catch (error) {
      if (error instanceof ZodError) {
        setStatusSubmit(EnumFormCreateStatus.ERROR);
      }
    }
  };
  // ---------------------------------------------------------

  return (
    <div className="bg-slate-50 p-2  mt-5 rounded-xl shadow-upmd shadow-zinc-500">
      <div className="grid grid-rows-2 justify-items-center mt-10 ">
        <h1 className="text-[2rem]">Форма добавления заказа</h1>
        <p>{checkStatusSubmit(statusSubmit)}</p>
      </div>
      <form action={submitForm} className="text-[18px] pl-10 mr-10 mb-10">
        <div className="grid grid-cols-2 gap-8">
          <TitleTextCreateOrderForm />
          <PriceTextCreateOrderForm />
        </div>
        <AddressTextCreateOrderForm />
        <DescriptionTextCreateOrderForm />
        <div className="flex justify-between items-center">
          <DateCreateOrderForm />
          <ButtonViolet
            typeBtn="submit"
            OnClickFn={() => setStatusSubmit(EnumFormCreateStatus.LOADING)}
          >
            Добавить
          </ButtonViolet>
        </div>
      </form>
    </div>
  );
};

const checkStatusSubmit = (statusSubmit: EnumFormCreateStatus): string => {
  return statusSubmit === EnumFormCreateStatus.LOADING
    ? "Идет отправка заказа"
    : statusSubmit === EnumFormCreateStatus.ERROR
    ? "Произошла ошибка, попробуйте снова"
    : statusSubmit === EnumFormCreateStatus.SUBMIT
    ? "форма отправлена"
    : "";
};
