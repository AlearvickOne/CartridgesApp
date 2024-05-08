interface ITextField {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChangeFn?: () => void;
  helperText: string;
}

export const TextField = (id: string, name: string) => {
  return (
    <TextField
      id="title-order"
      className="px-3 py-1"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeFn}
      helperText={helperText}
    />
  );
};
