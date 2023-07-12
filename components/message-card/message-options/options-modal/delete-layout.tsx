"use client";

import {
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import type { Message, UnstrictMessage } from "@/drizzle/schema";
import { MessageContext } from "@/lib/context";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function DeleteLayout({
  setIsOpen,
}: {
  setIsOpen: (state: boolean) => void;
}) {
  const message: Message = JSON.parse(useContext(MessageContext)!.toString());

  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  async function handleDelete() {
    setIsDeleting(true);
    const body: UnstrictMessage = {
      id: message.id,
    };

    const res = await fetch("/api/delete-message", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.refresh();
      setIsOpen(false);
      setIsDeleting(false);
      toast({
        title: "Success!",
        description: "Your message was deleted 🫡",
      });
    } else {
      toast({
        title: "Error!",
        description: "We couldn't delete your message 🤡",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle>Do you really wanna delete this? 😢</AlertDialogTitle>

        <AlertDialogDescription>
          You can&apos;t undo this action!
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>

        <Button
          variant="destructive"
          disabled={isDeleting}
          onClick={handleDelete}
        >
          {!isDeleting ? "Hell yeah brother 🦅" : "Deleting..."}
        </Button>
      </AlertDialogFooter>
    </>
  );
}
