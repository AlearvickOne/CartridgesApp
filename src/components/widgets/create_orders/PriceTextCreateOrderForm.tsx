import { FormDataNamingOrderClass } from "@/constants/constants";
import { ITextInputsCreateOrder } from "@/types/create-orders.interface";
import { TextField } from "@material-ui/core";
import React, { ChangeEvent, useCallback } from "react";

export const PriceTextCreateOrderForm = ({
  textValue,
  textValueHelper,
  setInputsValue,
}: ITextInputsCreateOrder) => {
  const priceChange = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (isNaN(+e.target.value)) return;

    setInputsValue((prev) => ({
      ...prev,
      priceValue: e.target.value.substring(0, 7),
    }));
  }, []);

  return (
    <div className="flex flex-wrap flex-col mb-5">
      <label htmlFor="price-order" className="py-[2px] mb-2">
        Цена услуги
      </label>
      <TextField
        id="price-order"
        className="px-3 py-1"
        name={FormDataNamingOrderClass.NAME_PRICE_ORDER}
        type="text"
        placeholder="Введите цену услуги ..."
        value={textValue}
        onChange={priceChange}
        helperText={textValueHelper}
      />
    </div>
  );
};
