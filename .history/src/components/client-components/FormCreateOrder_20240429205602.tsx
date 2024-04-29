"use client";

import { FormDataNamingOrderClass } from "@/constants/constants";
import { IFormCreateOrder } from "@/types/orders.interface";
import React, { LegacyRef, useCallback, useRef, useState } from "react";
import { YandexMaps } from "../widgets/YandexMaps";

export const FormCreateOrder = ({ createOrderfn }: IFormCreateOrder) => {
  const [address, setAddress] = useState<string>("");
  const refInputFile = useRef<LegacyRef<HTMLInputElement>>();

  const setAdressClientOrder = useCallback(
    (address: string) => {
      setAddress(address);
    },
    [address]
  );

  const handleSetImageFileRef = () => {
    const current = refInputFile.current;
    if (refInputFile.current === null) return;

    if (!file) throw new Error("Файл отсутствует");

    console.log(file);
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <h1 className=" text-[2rem]">Форма добавления заказа</h1>
      </div>
      <form action={createOrderfn} className="text-[18px] mr-10">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-wrap flex-col mb-5">
            <label className="px-3 py-[2px] mb-2">Название услуги</label>
            <input
              className="px-3 py-1 bg-transparent border-b-2 border-black"
              name={FormDataNamingOrderClass.NAME_TITLE_ORDER}
              type="text"
              placeholder="Введите название услуги ..."
            />
          </div>
          <div className="flex flex-wrap flex-col mb-5">
            <label className="px-3 py-[2px] mb-2">Цена услуги</label>
            <input
              className="px-3 py-1 bg-transparent border-b-2 border-black"
              name={FormDataNamingOrderClass.NAME_DESC_ORDER}
              type="number"
              placeholder="Введите цену услуги ..."
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label className="px-3 py-[2px] mb-2">Адрес заказчика услуги (Выберите на карте)</label>
          <input
            className="px-3 py-1 bg-transparent border-b-2 border-black mb-2"
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
            name={FormDataNamingOrderClass.NAME_PRICE_ORDER}
            rows={3}
            placeholder="Опишите подробно вашу услугу ..."
          />
        </div>
        <div className="flex justify-between items-center">
          <input ref={refInputFile} type="file" className="hidden" />
          <input type="date" />
          <button type="submit" className="text-right border-2 rounded-lg px-5 py-2">
            Добавить
          </button>
        </div>
      </form>
    </>
  );
};
