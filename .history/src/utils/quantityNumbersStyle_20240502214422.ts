export const quantityNumbersStyle = (quantity: number | undefined): string => {
  const style = "";

  if (quantity! < 10) return style + " min-w-[2.2rem] min-h-2 ";
  else if (quantity! >= 10 && quantity! < 100) return style + " min-w-[2.3rem] min-h-2";
  else return style + " min-w-2 min-h-2";
};
