import { IAuthForm, IAuthResponse } from "@/types/auth.interface";
import { axiosClassic } from "../interceptors";
import { removeFromStorage, saveTokenStorage } from "./auth-token.services";

export const authService = {
  async main(type: "login" | "register", data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>(`/auth/${type}`, data);

    console.log(1);

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>("/auth/login/access-token");
    console.log(1);
    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async logout() {
    const response = await axiosClassic.post<boolean>("/auth/logout");

    if (response.data) removeFromStorage();

    return response;
  },
};
