import { IAuthResponse } from "@/types/auth.interface";
import { axiosClassic } from "../interceptors";
import { saveTokenStorage } from "./auth-token.services";

export const authService = {
  async main(type: "login" | "register", data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>(`/auth/${type}`, data);

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>("/auth/login/access-token");

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
  },
};
