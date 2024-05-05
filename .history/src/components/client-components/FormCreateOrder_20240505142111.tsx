"use client";

import { FormDataNamingOrderClass } from "@/constants/constants";
import React, { useCallback, useState } from "react";
import { YandexMaps } from "../widgets/yandex-widgets/YandexMaps";
import { Input } from "@material-ui/core";
import { IFormCreateOrder } from "@/types/orders.interface";
import { error } from "console";

export const FormCreateOrder = ({ createOrderForm }: IFormCreateOrder) => {
  const [address, setAddress] = useState<string>("");
  const [inputsValue, setInputsValue] = useState({
    titleValue: "",
    priceValue: "",
  });
  const [statusSubmit, setStatusSubmit] = useState<"submit" | "error" | "loading" | "">("");

  const setAdressClientOrder = useCallback(
    (address: string) => {
      setAddress(address);
    },
    [address]
  );

  type TReactEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

  const titleChange = (e: TReactEvent) => {
    setInputsValue((prev) => ({
      ...prev,
      titleValue: e.target.value.substring(0, 50),
    }));
  };

  const priceChange = (e: TReactEvent) => {
    setInputsValue((prev) => ({
      ...prev,
      priceValue: e.target.value.substring(0, 7),
    }));
  };

  return (
    <div className="bg-slate-50 p-2  mt-5 rounded-xl shadow-upmd shadow-zinc-500">
      <div className="flex justify-center my-10 ">
        <h1 className=" text-[2rem]">Форма добавления заказа</h1>
        <p>
          {statusSubmit === "loading"
            ? "Идет создание запроса"
            : statusSubmit === "error"
            ? "Произошла ошибка, попробуйте снова"
            : statusSubmit === "submit"
            ? "форма отправлена"
            : ""}
        </p>
      </div>
      <form
        action={async (formdata) => {
          try {
            setTimeout(async () => {
              setStatusSubmit(() => "loading");
              createOrderForm(formdata);
              setStatusSubmit(() => "submit");
            }, 0);
          } catch (error) {
            setStatusSubmit(() => "error");
          }
        }}
        className="text-[18px] pl-10 mr-10 mb-10"
      >
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-wrap flex-col mb-5">
            <label className="px-3 py-[2px] mb-2">Название услуги</label>
            <Input
              className="px-3 py-1"
              name={FormDataNamingOrderClass.NAME_TITLE_ORDER}
              type="text"
              placeholder="Введите название услуги ..."
              value={inputsValue.titleValue}
              onChange={titleChange}
            />
          </div>
          <div className="flex flex-wrap flex-col mb-5">
            <label className="px-3 py-[2px] mb-2">Цена услуги</label>
            <Input
              className="px-3 py-1"
              name={FormDataNamingOrderClass.NAME_PRICE_ORDER}
              type="number"
              placeholder="Введите цену услуги ..."
              value={inputsValue.priceValue}
              onChange={priceChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label className="px-3 py-[2px] mb-2">Адрес заказчика услуги (Выберите на карте)</label>
          <Input
            className="px-3 py-1 mb-2"
            name={FormDataNamingOrderClass.NAME_ADRESS_CLIENT_ORDER}
            type="text"
            defaultValue={address}
          />
          <YandexMaps setAddress={setAdressClientOrder} />
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label className="px-3 py-[2px] mb-2 ">Описание услуги</label>

          <textarea
            className="border-2 p-4 rounded-xl resize-none shadow-inset shadow-neutral-400"
            name={FormDataNamingOrderClass.NAME_DESC_ORDER}
            rows={3}
            placeholder="Опишите подробно вашу услугу ..."
          />
        </div>
        <div className="flex justify-between items-center">
          <Input
            type="date"
            name={FormDataNamingOrderClass.NAME_DATE_ORIGIN_ORDER}
            defaultValue={"2024-01-01"}
          />
          <button
            type="submit"
            className="text-right rounded-lg px-5 py-2 ml-5  bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all"
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};
