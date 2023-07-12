import type { Message } from "@/drizzle/schema";
import { MessageContext } from "@/lib/context";
import { clerkClient } from "@clerk/nextjs";
import { Pencil1Icon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import UserHover from "../user-hover";
import MessageOptions from "./message-options";

dayjs.extend(relativeTime);

export default async function MessageCard({ message }: { message: Message }) {
  const author = await clerkClient.users.getUser(message.authorId!);

  return (
    <MessageContext.Provider value={JSON.stringify(message)}>
      <TooltipProvider>
        <Card className="flex flex-col overflow-auto transition hover:shadow-lg dark:hover:bg-slate-900">
          <CardHeader className="flex-row items-center gap-2.5 space-y-0">
            <UserHover />

            <CardTitle className="truncate text-xl">
              @{author.username}
            </CardTitle>

            <MessageOptions />
          </CardHeader>

          <CardContent className="flex-1">
            <p className="whitespace-pre-line text-sm">{message.content}</p>
          </CardContent>

          <CardFooter className="flex items-center justify-end gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            {message.updatedAt && (
              <>
                <Tooltip>
                  <TooltipTrigger>
                    <Pencil1Icon />
                  </TooltipTrigger>

                  <TooltipContent className="mx-2 my-1">
                    Updated {dayjs().to(message.updatedAt)} 🤥
                  </TooltipContent>
                </Tooltip>
                &middot;
              </>
            )}
            <p className="text-xs">{dayjs().to(message.createdAt)}</p>
          </CardFooter>
        </Card>
      </TooltipProvider>
    </MessageContext.Provider>
  );
}
