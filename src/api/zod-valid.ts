import { z } from "zod";

export const zodValid = z.object({
  title: z.string().min(3, { message: "Минимальное количество символов в заголовке - 3" }),
  price: z.string().min(2),
});
