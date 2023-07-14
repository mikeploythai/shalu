"use client";

import MessageForm from "@/components/message-form";
import {
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import UploadModal from "@/components/upload-modal";
import type { Message, UnstrictMessage } from "@/drizzle/schema";
import { MessageContext } from "@/lib/context";
import useFormTools from "@/lib/hooks/useFormTools";
import type { FormSchema } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useController } from "react-hook-form";

export default function EditLayout({
  setIsOpen,
}: {
  setIsOpen: (state: boolean) => void;
}) {
  const formId = "edit-message";
  const message: Message = JSON.parse(useContext(MessageContext)!.toString());

  const [photoUrl, setPhotoUrl] = useState<string | null>(
    message.attachments || null
  );
  const router = useRouter();
  const { toast } = useToast();
  const { form } = useFormTools({ defaultValue: message.content });
  const {
    field: { value },
    fieldState: { error },
    formState: { isValid, isDirty, isSubmitting },
  } = useController({
    control: form.control,
    name: "message",
  });

  async function action(values: FormSchema) {
    const body: UnstrictMessage = {
      id: message.id,
      content: values.message,
      attachments: photoUrl || null,
    };

    const res = await fetch("/api/update-message", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.refresh();
      setIsOpen(false);
      toast({
        title: "Success!",
        description: "Your message was updated 😁",
      });
    } else {
      toast({
        title: "Error!",
        description: "We couldn't update your message 😰",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle>Editing Message</AlertDialogTitle>
      </AlertDialogHeader>

      <MessageForm form={form} formId={formId} action={action} />

      <AlertDialogFooter>
        <div className="mr-auto flex items-center gap-1.5">
          <UploadModal setPhotoUrl={setPhotoUrl} />

          {photoUrl && (
            <Image
              src={photoUrl}
              alt=""
              height={24}
              width={24}
              quality={10}
              className="aspect-square rounded border border-slate-200 object-cover dark:border-slate-800"
            />
          )}
        </div>

        {value.length <= 500 ? (
          <p
            className={`mb-2 text-center text-[0.8rem] font-medium sm:my-auto ${
              value.length >= 450
                ? "text-red-500 dark:text-red-900"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {value.length}/500
          </p>
        ) : (
          error && (
            <p className="mb-2 text-center text-[0.8rem] font-medium text-red-500 dark:text-red-900 sm:my-auto">
              {error.message}
            </p>
          )
        )}

        <AlertDialogCancel>Cancel</AlertDialogCancel>

        <Button
          form={formId}
          type="submit"
          disabled={
            photoUrl === message.attachments &&
            (!isValid || !isDirty || isSubmitting)
          }
        >
          {!isSubmitting ? "Update" : "Updating..."}
        </Button>
      </AlertDialogFooter>
    </>
  );
}
