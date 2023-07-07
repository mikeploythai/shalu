import * as z from "zod";

export const formSchema = z.object({
  message: z.string().max(500, "It's too long!"),
});
