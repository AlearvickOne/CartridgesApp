import { CreateAxiosDefaults } from "axios";

const option: CreateAxiosDefaults = {
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};
