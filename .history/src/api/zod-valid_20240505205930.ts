import { z } from "zod";

const zodValid = z.object({
  title: z.string().min(3),
});
