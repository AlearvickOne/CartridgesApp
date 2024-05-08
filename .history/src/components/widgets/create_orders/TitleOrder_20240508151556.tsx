import React from "react";

export const TitleOrder = () => {
  return (
    <div className="flex flex-wrap flex-col mb-5">
      <label htmlFor="title-order" className="py-[2px] mb-2">
        Название услуги
      </label>
      <TextField
        id="title-order"
        className="px-3 py-1"
        name={FormDataNamingOrderClass.NAME_TITLE_ORDER}
        type="text"
        placeholder="Введите название услуги ..."
        value={inputsValue.titleValue}
        onChange={titleChange}
        helperText={inputsValue.titleValueError}
      />
    </div>
  );
};
