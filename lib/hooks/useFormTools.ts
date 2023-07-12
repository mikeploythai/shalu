import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../form-schema";
import type { FormSchema } from "../types";

export default function useFormTools({
  defaultValue,
}: {
  defaultValue?: string | null;
}) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: defaultValue || "",
    },
    mode: "all",
  });

  return { form };
}
