import { z } from "zod";

const zodValid = z.object({
  title: z.string().min(3),
  price: z.number().min(2),
});
