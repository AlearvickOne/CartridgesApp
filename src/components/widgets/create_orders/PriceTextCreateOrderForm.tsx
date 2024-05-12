import { FormDataNamingOrderClass } from "@/constants/constants";
import { TextField } from "@material-ui/core";
import { ChangeEvent, memo, useCallback } from "react";

export const PriceTextCreateOrderForm = memo(() => {
  const priceChange = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const nums = /[^0-9]/g;
    e.target.value = e.target.value.replace(nums, "");
  }, []);

  return (
    <div className="flex flex-wrap flex-col mb-5">
      <label htmlFor="price-order" className="py-[2px] mb-2">
        Цена услуги в рублях
      </label>
      <TextField
        id="price-order"
        className="px-3 py-1"
        name={FormDataNamingOrderClass.NAME_PRICE_ORDER}
        type="text"
        placeholder="Введите цену услуги ..."
        onChange={priceChange}
        helperText={"Минимальное количество символов - 2"}
      />
    </div>
  );
});
