import { FormDataNamingOrderClass } from "@/constants/constants";
import { ITextInputsCreateOrder } from "@/types/create-orders.interface";
import { TextField } from "@material-ui/core";
import React, { ChangeEvent, useCallback } from "react";

export const TitleTextCreateOrderForm = ({
  textValue,
  textValueHelper,
  setInputsValue,
}: ITextInputsCreateOrder) => {
  const titleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputsValue((prev) => ({
      ...prev,
      titleValue: e.target.value.substring(0, 20),
    }));
  }, []);

  return (
    <div className="flex flex-wrap flex-col mb-5">
      <label htmlFor="title-order" className="py-[2px] mb-2">
        Название услуги
      </label>
      <TextField
        id="title-order"
        type="text"
        className="px-3 py-1"
        name={FormDataNamingOrderClass.NAME_TITLE_ORDER}
        placeholder="Введите название услуги ..."
        value={textValue}
        onChange={titleChange}
        helperText={textValueHelper}
      />
    </div>
  );
};
