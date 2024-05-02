import { IOrderInBasketInArray } from "@/types/orders-basket.interface";

export const reduceSumValue = (array: IOrderInBasketInArray | undefined, valute): number => {
  let valuteConverterFromRub = 1;
  switch (valute) {
    case "rub":
      valuteConverterFromRub = 1;
      break;
    case "usd":
      valuteConverterFromRub = 92.05;
      break;
  }

  if (!array) return 0;

  return array?.reduce((acc, { priceOrder }) => Math.round((acc += priceOrder / 92.05)), 0);
};
