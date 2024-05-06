import axios, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
});
