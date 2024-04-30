"use client";

import { FormDataNamingOrderClass } from "@/constants/constants";
import React, { useCallback, useState } from "react";
import { YandexMaps } from "../widgets/YandexMaps";
import { Input } from "@material-ui/core";
import { InputSetFiles } from "../widgets/InputSetFiles";
import { createOrderForm } from "@/app/(dashboard)/create_order/page";

export const FormCreateOrder = () => {
  const [address, setAddress] = useState<string>("");
  const [file, setFile] = useState();
  const setAdressClientOrder = useCallback(
    (address: string) => {
      setAddress(address);
    },
    [address]
  );

  console.log(file);

  return (
    <>
      <div className="flex justify-center my-10">
        <h1 className=" text-[2rem]">Форма добавления заказа</h1>
      </div>
      <form action={createOrderForm} className="text-[18px] mr-10 mb-10">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-wrap flex-col mb-5">
            <label className="px-3 py-[2px] mb-2">Название услуги</label>
            <Input
              className="px-3 py-1"
              name={FormDataNamingOrderClass.NAME_TITLE_ORDER}
              type="text"
              placeholder="Введите название услуги ..."
            />
          </div>
          <div className="flex flex-wrap flex-col mb-5">
            <label className="px-3 py-[2px] mb-2">Цена услуги</label>
            <Input
              className="px-3 py-1"
              name={FormDataNamingOrderClass.NAME_DESC_ORDER}
              type="number"
              placeholder="Введите цену услуги ..."
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
          {/* <YandexMaps setAddress={setAdressClientOrder} /> */}
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label className="px-3 py-[2px] mb-2 ">Описание услуги</label>

          <textarea
            className="border-2 p-4 rounded-xl resize-none shadow-inset shadow-neutral-400"
            name={FormDataNamingOrderClass.NAME_PRICE_ORDER}
            rows={3}
            placeholder="Опишите подробно вашу услугу ..."
          />
        </div>
        <div className="flex justify-between items-center">
          <InputSetFiles setFile={setFile} />
          <div>
            <Input
              type="date"
              name={FormDataNamingOrderClass.NAME_DATE_ORIGIN_ORDER}
              value={"2012-12-12"}
            />
            <button type="submit" className="text-right border-2 rounded-lg px-5 py-2 ml-5">
              Добавить
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
