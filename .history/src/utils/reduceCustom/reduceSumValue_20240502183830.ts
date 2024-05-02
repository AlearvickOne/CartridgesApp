export const reduceSumValue = (array: IOrderInBasketInArray | []) => {
  if (!array) return;
  return array?.reduce((acc, { priceOrder }) => (acc += priceOrder), 0);
};
