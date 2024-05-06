export const errorServer = (error: any): string => {
  const message = error?.response?.data.message;
};
