interface ITextField {
  id: string;
  name: string;
  type: string;
}

export const TextField = (id: string, name: string) => {
  return (
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
  );
};
