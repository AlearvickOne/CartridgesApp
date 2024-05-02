export const reduceSumValue = (array: [] | undefined) => {
  if (!array) return;
  return array?.reduce((acc, { priceOrder }) => (acc += priceOrder), 0);
};
