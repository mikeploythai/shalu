"use client";

import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import type { ContentType } from "@/lib/types";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import OptionsDropdown from "./options-dropdown";
import OptionsModal from "./options-modal/options-modal";

export default function MessageOptions() {
  const [contentType, setContentType] = useState<ContentType | undefined>();

  return (
    <OptionsModal contentType={contentType!}>
      <OptionsDropdown>
        <AlertDialogTrigger asChild>
          <DropdownMenuItem
            className="flex items-center gap-2.5 hover:cursor-pointer"
            onClick={() => setContentType("edit")}
          >
            <Pencil1Icon />
            Edit
          </DropdownMenuItem>
        </AlertDialogTrigger>

        <DropdownMenuSeparator />

        <AlertDialogTrigger asChild>
          <DropdownMenuItem
            className="flex items-center gap-2.5 hover:cursor-pointer"
            onClick={() => setContentType("delete")}
          >
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </AlertDialogTrigger>
      </OptionsDropdown>
    </OptionsModal>
  );
}
