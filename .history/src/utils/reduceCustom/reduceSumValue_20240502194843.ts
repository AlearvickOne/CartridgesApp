import { IOrderInBasketInArray } from "@/types/orders-basket.interface";

export const reduceSumValue = (array: IOrderInBasketInArray | undefined): string => {
  if (!array) return;
  return array?.reduce((acc, { priceOrder }) => (acc += priceOrder), 0);
};
