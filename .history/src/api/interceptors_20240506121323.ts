import axios, { CreateAxiosDefaults } from "axios";
import { getAccessTokens } from "@/api/services/auth-token.services";

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
