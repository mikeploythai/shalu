import * as z from "zod";
import { formSchema } from "./form-schema";

export interface Message {
  id: number;
  author: string;
  username: string;
  content: string;
  createdAt: Date;
}

export type FormSchema = z.infer<typeof formSchema>;

export type ContentType = "edit" | "delete";
