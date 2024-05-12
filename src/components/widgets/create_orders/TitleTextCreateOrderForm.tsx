import { FormDataNamingOrderClass } from "@/constants/constants";
import { TextField } from "@material-ui/core";
import { ChangeEvent, memo, useCallback } from "react";

export const TitleTextCreateOrderForm = memo(() => {
  const titleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.target.value = e.target.value.substring(0, 20);
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
        onChange={titleChange}
        helperText={"Минимальное количество символов - 3"}
      />
    </div>
  );
});
