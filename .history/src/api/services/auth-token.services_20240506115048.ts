import Cookies from "js-cookie";

import { EnumTokens } from "./auth.service";

export const getAccessTokens = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: "localhost",
  });
};
