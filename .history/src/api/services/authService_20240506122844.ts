import { IAuthResponse } from "@/types/auth.interface";
import { axiosClassic } from "../interceptors";

export const authService = {
  async main(type: "login" | "register", data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>(`/auth/${type}`, data);
  },
};
