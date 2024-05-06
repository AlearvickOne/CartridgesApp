import axios, { CreateAxiosDefaults } from "axios";
import { getAccessToken, removeFromStorage } from "@/api/services/auth-token.services";

import { errorServerCatch } from "./errorsServerCatch";
import { authService } from "./services/authService";

const options: CreateAxiosDefaults = {
  baseURL: "http://localhost:8800/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error?.response?.status === 401 ||
        errorServerCatch(error) === "jwt expired" ||
        errorServerCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await authService.getNewTokens();
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        if (errorServerCatch(error) === "jwt expired") removeFromStorage();
      }
    }

    throw error;
  }
);

export { axiosClassic, axiosWithAuth };
