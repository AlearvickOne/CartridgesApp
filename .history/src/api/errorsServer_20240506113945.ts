export const errorServer = (error: any): string => {
  const message = error?.response?.data?.message;

  return message ? typeof error.response.data.message === 'object' ? message[0] Ж message : error.message
};
