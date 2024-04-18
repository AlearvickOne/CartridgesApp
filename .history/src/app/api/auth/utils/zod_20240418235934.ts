import { object, string } from "zod";

export const signInSchema = object({
  login: string({ required_error: "login is required" }),
});
