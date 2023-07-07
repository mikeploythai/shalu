"use client";

import useFormTools from "@/lib/hooks/useFormTools";
import type { FormSchema } from "@/lib/types";
import { useController } from "react-hook-form";
import MessageForm from "./message-form";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

export default function MessageBox() {
  const formId = "new-message";
  const { form } = useFormTools({});
  const {
    fieldState: { error },
    formState: { isValid, isDirty, isSubmitting },
  } = useController({
    control: form.control,
    name: "message",
  });

  function action(values: FormSchema) {
    alert(values.message);
    form.reset();
  }

  return (
    <Card className="mx-auto w-full max-w-screen-md overflow-hidden transition focus-within:shadow-lg">
      <CardContent className="p-0">
        <MessageForm
          form={form}
          formId={formId}
          action={action}
          className="rounded-none border-none"
        />
      </CardContent>

      <CardFooter className="items-center justify-end gap-2.5 border-t border-t-slate-200 p-0 dark:border-t-slate-800">
        {error && (
          <p className="text-[0.8rem] font-medium text-red-500 dark:text-red-900">
            {error.message}
          </p>
        )}

        <Button
          form={formId}
          type="submit"
          className="rounded-none"
          disabled={!isValid || !isDirty || isSubmitting}
        >
          {!isSubmitting ? "Post" : "Posting..."}
        </Button>
      </CardFooter>
    </Card>
  );
}
