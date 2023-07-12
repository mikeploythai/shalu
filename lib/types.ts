import * as z from "zod";
import { formSchema } from "./form-schema";

export type FormSchema = z.infer<typeof formSchema>;

export type ContentType = "edit" | "delete";
