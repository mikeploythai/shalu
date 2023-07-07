"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import type { ContentType } from "@/lib/types";
import { useState } from "react";
import EditLayout from "./edit-layout";

type OptionsModal = {
  contentType: ContentType;
  children: React.ReactNode;
};

export default function OptionsModal({ contentType, children }: OptionsModal) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      {children}

      <AlertDialogContent>
        {contentType === "edit" ? (
          <EditLayout setIsOpen={setIsOpen} />
        ) : (
          <AlertDialogHeader>Hey</AlertDialogHeader>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
