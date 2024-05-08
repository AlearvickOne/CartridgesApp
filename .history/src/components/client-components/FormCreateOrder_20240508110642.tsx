"use client";

import { FormDataNamingOrderClass } from "@/constants/constants";
import React, { useCallback, useState } from "react";
import { YandexMaps } from "../widgets/yandex-widgets/YandexMaps";
import { TextField } from "@material-ui/core";
import { IFormCreateOrder } from "@/types/orders.interface";
import { useCheckConnectSocketStatus } from "@/hooks/useCheckConnectSocketStatus";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { zodValid } from "@/api/zod-valid";
import { ZodError } from "zod";
import { EnumFormCreateStatus } from "@/types/enums";
import { useForm } from "react-hook-form";

export const FormCreateOrder = ({ createOrderForm }: IFormCreateOrder) => {
  const [address, setAddress] = useState<string>("");
  const [inputsValue, setInputsValue] = useState({
    titleValue: "",
    titleValueError: "Минимальное количество символов - 3",
    priceValue: 10,
    priceValueError: "Минимальное количество символов - 2",
  });
  const [statusSubmit, setStatusSubmit] = useState<EnumFormCreateStatus>(
    EnumFormCreateStatus.NO_STATUS
  );
  const statusConnect = useCheckConnectSocketStatus();

  const setAdressClientOrder = useCallback(
    (address: string) => {
      setAddress(address);
    },
    [address]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  type TReactEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

  const titleChange = useCallback((e: TReactEvent) => {
    setInputsValue((prev) => ({
      ...prev,
      titleValue: e.target.value.substring(0, 20),
    }));
  }, []);

  const priceChange = useCallback((e: TReactEvent) => {
    if (isNaN(+e.target.value)) return;
    else {
      setInputsValue((prev) => ({
        ...prev,
        priceValue: typeof +e.target.value === "number" ? +e.target.value.substring(0, 7) : +"",
      }));
    }
  }, []);

  const submitForm = async (formdata: FormData) => {
    try {
      if (statusConnect === "connected") {
        zodValid.parse({
          title: formdata.get(FormDataNamingOrderClass.NAME_TITLE_ORDER)!,
          price: +formdata.get(FormDataNamingOrderClass.NAME_DESC_ORDER)!,
        });

        createOrderForm(formdata);
        setStatusSubmit(EnumFormCreateStatus.SUBMIT);
      } else setStatusSubmit(EnumFormCreateStatus.ERROR);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error);
        setStatusSubmit(EnumFormCreateStatus.ERROR);
      }
    }
  };

  return (
    <div className="bg-slate-50 p-2  mt-5 rounded-xl shadow-upmd shadow-zinc-500">
      <div className="grid grid-rows-2 justify-items-center mt-10 ">
        <h1 className="text-[2rem]">Форма добавления заказа</h1>
        <p>
          {statusSubmit === "loading"
            ? "Идет отправка заказа"
            : statusSubmit === "error"
            ? "Произошла ошибка, попробуйте снова"
            : statusSubmit === "submit"
            ? "форма отправлена"
            : ""}
        </p>
      </div>
      <form action={submitForm} className="text-[18px] pl-10 mr-10 mb-10">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-wrap flex-col mb-5">
            <label htmlFor="title-order" className="py-[2px] mb-2">
              Название услуги
            </label>
            <TextField
              id="title-order"
              className="px-3 py-1"
              type="text"
              placeholder="Введите название услуги ..."
              helperText={inputsValue.titleValueError}
              value={inputsValue.titleValue}
              {...register(FormDataNamingOrderClass.NAME_TITLE_ORDER, {
                required: true,
                maxLength: 20,
                minLength: 5,
                onChange: (e) => titleChange(e),
              })}
            />
          </div>
          <div className="flex flex-wrap flex-col mb-5">
            <label htmlFor="price-order" className="py-[2px] mb-2">
              Цена услуги
            </label>
            <TextField
              id="price-order"
              className="px-3 py-1"
              type="text"
              placeholder="Введите цену услуги ..."
              helperText={inputsValue.priceValueError}
              value={inputsValue.priceValue}
              {...register(FormDataNamingOrderClass.NAME_PRICE_ORDER, {
                required: true,
                maxLength: 7,
                minLength: 2,
                onChange: (e) => priceChange(e),
              })}
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label htmlFor="address-order" className="py-[2px] mb-2">
            Адрес заказчика услуги (Выберите на карте)
          </label>
          <TextField
            id="address-order"
            className="py-1 mb-2"
            type="text"
            defaultValue={address}
            {...register(FormDataNamingOrderClass.NAME_ADRESS_CLIENT_ORDER, {
              required: true,
            })}
          />
          <YandexMaps setAddress={setAdressClientOrder} />
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label htmlFor="desc-order" className="px-3 py-[2px] mb-2 ">
            Описание услуги
          </label>
          <textarea
            id="desc-order"
            className="p-2 rounded-xl resize-none shadow-inset shadow-neutral-400 transition-all outline-none hover:outline-black focus:outline-blue-900"
            rows={3}
            placeholder="Опишите подробно вашу услугу ..."
            {...register(FormDataNamingOrderClass.NAME_DESC_ORDER)}
          />
        </div>
        <div className="flex justify-between items-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
              type="date"
              // format={"                  DD-MM-YYYY"}
              defaultValue={dayjs()}
              // maxDate={dayjs()}
              {...register(FormDataNamingOrderClass.NAME_DATE_ORIGIN_ORDER, {
                valueAsDate: true,
              })}
            />
          </LocalizationProvider>
          <button
            type="submit"
            className="text-right rounded-lg px-5 py-2 ml-5  bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all"
            onClick={() => setStatusSubmit(EnumFormCreateStatus.LOADING)}
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};
