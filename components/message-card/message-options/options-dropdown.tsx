import type { Message } from "@/drizzle/schema";
import { MessageContext, UserContext } from "@/lib/context";
import type { User } from "@clerk/nextjs/dist/types/server";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export default function OptionsDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authorId } = JSON.parse(
    useContext(MessageContext)!.toString()
  ) as Message;
  const { id: currentUserId } = JSON.parse(
    useContext(UserContext)!.toString()
  ) as User;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="ml-auto focus:outline-none"
        disabled={authorId !== currentUserId}
        asChild
      >
        <Button size="icon" variant="ghost" className="focus-visible:ring-0">
          <DotsVerticalIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mx-2 my-1">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
