import type { Message } from "@/drizzle/schema";
import { MessageContext } from "@/lib/context";
import { clerkClient } from "@clerk/nextjs";
import { RocketIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { useContext } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export default async function UserHover() {
  const message: Message = JSON.parse(useContext(MessageContext)!.toString());
  const author = await clerkClient.users.getUser(message.authorId!);

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Avatar>
          <AvatarImage
            src={author.imageUrl}
            alt={`${author.username}'s profile picture`}
          />
        </Avatar>
      </HoverCardTrigger>

      <HoverCardContent className="mx-2 my-1 space-y-4">
        <header className="flex items-center gap-2.5 overflow-auto">
          <Avatar>
            <AvatarImage
              src={author.imageUrl}
              alt={`${author.username}'s profile picture`}
            />
          </Avatar>

          <h3 className="truncate text-xl font-semibold tracking-tight">
            @{author.username}
          </h3>
        </header>

        <footer className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <RocketIcon /> Joined {dayjs(author.createdAt).format("MM/DD/YYYY")}
        </footer>
      </HoverCardContent>
    </HoverCard>
  );
}
