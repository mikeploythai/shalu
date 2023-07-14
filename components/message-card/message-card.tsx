import type { Message } from "@/drizzle/schema";
import { MessageContext, UserContext } from "@/lib/context";
import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/dist/types/server";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import { useContext } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TooltipProvider } from "../ui/tooltip";
import UserHover from "../user-hover";
import MessageOptions from "./message-options";
import PinnedIcon from "./pinned-icon";
import UpdatedIcon from "./updated-icon";

dayjs.extend(relativeTime);

export default function MessageCard({ message }: { message: Message }) {
  const { id: currentUserId } = JSON.parse(
    useContext(UserContext)!.toString()
  ) as User;

  async function Message() {
    const author = await clerkClient.users.getUser(message.authorId!);

    return (
      <MessageContext.Provider value={JSON.stringify(message)}>
        <TooltipProvider>
          <Card
            className={`flex flex-col overflow-auto transition hover:shadow-lg dark:hover:bg-slate-900 ${
              message.isPinned &&
              "border-dashed bg-transparent shadow-none hover:shadow-none dark:hover:bg-transparent"
            }`}
          >
            <CardHeader className="flex-row items-center gap-2.5 space-y-0">
              <UserHover />

              <CardTitle className="truncate text-xl">
                @{author.username}
              </CardTitle>

              <div className="ml-auto flex items-center">
                {message.isPinned && <PinnedIcon />}
                {currentUserId === author.id && <MessageOptions />}
              </div>
            </CardHeader>

            <CardContent className="flex-1 space-y-4">
              <p className="whitespace-pre-line text-sm">{message.content}</p>

              {message.attachments && (
                <figure className="relative h-60 w-full overflow-hidden rounded-md bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={message.attachments}
                    alt=""
                    className="object-cover"
                    fill
                  />
                </figure>
              )}
            </CardContent>

            <CardFooter className="flex items-center justify-end gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              {message.updatedAt && (
                <UpdatedIcon updatedAt={dayjs().to(message.updatedAt)} />
              )}
              <p className="text-xs">{dayjs().to(message.createdAt)}</p>
            </CardFooter>
          </Card>
        </TooltipProvider>
      </MessageContext.Provider>
    );
  }

  return <Message />;
}
