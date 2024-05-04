import { IBasket } from "@/types/orders-basket.interface";

export const reduceSumValue = (array: IBasket | undefined, valute: string): number => {
  let valuteConverterFromRub = 1;
  switch (valute) {
    case "rub":
      valuteConverterFromRub = 1;
      break;
    case "usd":
      valuteConverterFromRub = 92.05;
      break;
    default:
      break;
  }

  if (!array) return 0;

  return array?.reduce(
    (acc, { priceOrder }) => Math.round((acc += priceOrder / valuteConverterFromRub)),
    0
  );
};
