import { MessageContext } from "@/lib/message-context";
import { Message } from "@/lib/types";
import dayjs from "dayjs";
import Link from "next/link";
import { useContext } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export default function UserHover() {
  const message: Message = JSON.parse(useContext(MessageContext)!.toString());

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Avatar>
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </HoverCardTrigger>

      <HoverCardContent className="mx-2 my-1 space-y-4 overflow-auto">
        <header className="flex items-center gap-2.5">
          <Avatar>
            <AvatarFallback></AvatarFallback>
          </Avatar>

          <Link
            href="/"
            className="truncate text-xl font-semibold leading-none tracking-tight hover:underline"
          >
            @{message.username}
          </Link>
        </header>

        <footer className="text-xs">
          Joined {dayjs(message.createdAt).format("MM/DD/YYYY")}
        </footer>
      </HoverCardContent>
    </HoverCard>
  );
}
