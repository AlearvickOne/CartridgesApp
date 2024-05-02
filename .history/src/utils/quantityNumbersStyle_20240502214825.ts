export const quantityNumbersStyle = (quantity: number | undefined): string => {
  console.log(quantity);
  let addStyle = "";
  const style = `rounded-full border-[2px] p-1 bg-red-600 ${addStyle}`;

  if (quantity === undefined || quantity === 0) return addStyle;

  if (quantity < 10) addStyle = " min-w-[2.2rem] min-h-2";
  else if (quantity >= 10 && quantity < 100) addStyle = " min-w-[2.3rem] min-h-2";
  else return (addStyle = " min-w-2 min-h-2");
};
