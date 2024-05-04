export const quantityNumbersStyle = (quantity: number | undefined): string => {
  console.log("text", quantity);
  const style = ``;
  let addStyle = "";

  if (quantity === undefined || quantity === 0) return addStyle;

  if (quantity < 10) addStyle = " min-w-[2.2rem] min-h-2";
  else if (quantity >= 10 && quantity < 100) addStyle = " min-w-[2.3rem] min-h-2";
  else addStyle = " min-w-2 min-h-2";

  return style + addStyle;
};
