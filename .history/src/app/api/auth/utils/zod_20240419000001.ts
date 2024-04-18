import { object, string } from "zod";

export const signInSchema = object({
  login: string({ required_error: "login is required" }).min(1, "login is required"),
});
