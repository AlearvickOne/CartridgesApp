import { IAuthResponse, ILoginForm, IRegisterForm } from "@/types/auth.interface";
import { axiosClassic } from "../interceptors";
import { removeFromStorage, saveTokenStorage } from "./auth-token.services";

export const authService = {
  async main(type: "login" | "register", data: ILoginForm | IRegisterForm) {
    const response = await axiosClassic.post<IAuthResponse>(`/auth/${type}`, data);

    if (type === "login") console.log("login");

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>("/auth/login/access-token");
    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async logout() {
    const response = await axiosClassic.post<boolean>("/auth/logout");

    if (response.data) removeFromStorage();

    return response;
  },
};
