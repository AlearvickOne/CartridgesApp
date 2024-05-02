import { IOrderInBasketInArray } from "@/types/orders-basket.interface";

export const reduceSumValue = (array: IOrderInBasketInArray | undefined, valute): number => {
  let valuteConverterFromRub = 0;
  switch (valute) {
    case "RUB":
      valuteConverterFromRub = 1;
  }

  if (!array) return 0;

  return array?.reduce((acc, { priceOrder }) => Math.round((acc += priceOrder / 92.05)), 0);
};
