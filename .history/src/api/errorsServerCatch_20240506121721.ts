// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorServerCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  return message
    ? typeof error.response.data.message === "object"
      ? message[0]
      : message
    : error.message;
};
