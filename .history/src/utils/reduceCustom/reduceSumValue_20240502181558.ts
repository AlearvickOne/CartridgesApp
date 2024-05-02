export const reduceSumValue = (array: []) => {
  return array?.reduce((acc, { priceOrder }) => (acc += priceOrder), 0);
};
