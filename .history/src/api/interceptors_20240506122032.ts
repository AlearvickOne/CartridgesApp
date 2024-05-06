import axios, { CreateAxiosDefaults } from "axios";
import { getAccessTokens } from "@/api/services/auth-token.services";
import { config } from "process";
import { error } from "console";
import { errorServerCatch } from "./errorsServerCatch";

const options: CreateAxiosDefaults = {
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessTokens();

  if (config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

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
    )
      throw error;
  }
);
