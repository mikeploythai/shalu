import type { FormSchema } from "@/lib/types";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { Textarea } from "./ui/textarea";

interface MessageForm extends React.HTMLAttributes<HTMLTextAreaElement> {
  form: UseFormReturn<FormSchema>;
  formId: string;
  action: (values: FormSchema) => void
}

export default function MessageForm({ className, form, formId, action }: MessageForm) {

  return (
    <Form {...form}>
      <form id={formId} onSubmit={form.handleSubmit(action)}>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <Textarea
              placeholder="Say something nice :)"
              className={cn(
                "h-36 resize-none p-4 shadow-none transition focus-visible:bg-slate-100 focus-visible:ring-0 focus-visible:ring-offset-0 dark:focus-visible:bg-slate-900",
                className
              )}
              {...field}
            />
          )}
        />
      </form>
    </Form>
  );
}
