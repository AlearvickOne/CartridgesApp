export const reduceSumValue = (array: []) => {
  if (!array) return;
  return array?.reduce((acc, { priceOrder }) => (acc += priceOrder), 0);
};
