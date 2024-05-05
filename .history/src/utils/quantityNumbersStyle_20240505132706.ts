import clsx from "clsx";

export const quantityNumbersStyle = (quantity: number): string => {
  const style = clsx({
    "": quantity === 0 || quantity === undefined,
    "min-w-[2.2rem] min-h-5": quantity! < 10,
    "min-w-[2.3rem] min-h-2": quantity! >= 10 && quantity! < 100,
    "min-w-2 min-h-2": quantity! >= 100,
  });

  return style;
};
