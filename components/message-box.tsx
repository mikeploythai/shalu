"use client";

import type { UnstrictMessage } from "@/drizzle/schema";
import { UserContext } from "@/lib/context";
import useFormTools from "@/lib/hooks/useFormTools";
import type { FormSchema } from "@/lib/types";
import type { User } from "@clerk/nextjs/dist/types/server";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useController } from "react-hook-form";
import MessageForm from "./message-form";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useToast } from "./ui/use-toast";
import UploadModal from "./upload-modal";

export default function MessageBox() {
  const formId = "new-message";
  const user: User = JSON.parse(useContext(UserContext)!.toString());

  const [photoUrl, setPhotoUrl] = useState<string | null>();
  const router = useRouter();
  const { toast } = useToast();
  const { form } = useFormTools({});
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
      authorId: user.id,
      content: values.message,
      attachments: photoUrl || null,
    };

    const res = await fetch("/api/post-message", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.refresh();
      form.reset();
      setPhotoUrl(null);

      toast({
        title: "Success!",
        description: "Your message was posted 🥳",
      });
    } else {
      toast({
        title: "Error!",
        description: "We couldn't post your message 😭",
        variant: "destructive",
      });
    }
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
        <div className="mr-auto flex items-center gap-1.5">
          <UploadModal setPhotoUrl={setPhotoUrl} className="rounded-none" />

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
            className={`text-[0.8rem] font-medium ${
              value.length >= 450
                ? "text-red-500 dark:text-red-900"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {value.length}/500
          </p>
        ) : (
          error && (
            <p className="text-[0.8rem] font-medium text-red-500 dark:text-red-900">
              {error.message}
            </p>
          )
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
