"use client";

import MessageForm from "@/components/message-form";
import {
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import useFormTools from "@/lib/hooks/useFormTools";
import { MessageContext } from "@/lib/message-context";
import type { FormSchema, Message } from "@/lib/types";
import { useContext } from "react";
import { useController } from "react-hook-form";

export default function EditLayout({
  setIsOpen,
}: {
  setIsOpen: (state: boolean) => void;
}) {
  const formId = "edit-message";
  const message: Message = JSON.parse(useContext(MessageContext)!.toString());
  const { form } = useFormTools({ defaultValue: message.content });
  const {
    formState: { isValid, isDirty, isSubmitting },
  } = useController({
    control: form.control,
    name: "message",
  });

  function action(values: FormSchema) {
    alert(values.message);
    setIsOpen(false);
  }

  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle>Editing Message</AlertDialogTitle>
      </AlertDialogHeader>

      <MessageForm form={form} formId={formId} action={action} />

      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>

        <Button
          form={formId}
          type="submit"
          disabled={!isValid || !isDirty || isSubmitting}
        >
          {!isSubmitting ? "Update" : "Updating..."}
        </Button>
      </AlertDialogFooter>
    </>
  );
}
