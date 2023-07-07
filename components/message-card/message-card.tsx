import { MessageContext } from "@/lib/message-context";
import type { Message } from "@/lib/types";
import dayjs from "dayjs";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import MessageOptions from "./message-options";
import UserHover from "../user-hover";

export default function MessageCard({ message }: { message: Message }) {
  return (
    <MessageContext.Provider value={JSON.stringify(message)}>
      <Card className="overflow-auto transition hover:shadow-lg dark:hover:bg-slate-900">
        <CardHeader className="flex-row items-center gap-2.5 space-y-0">
          <UserHover />

          <Link href="/" className="overflow-auto">
            <CardTitle className="truncate text-xl hover:underline">
              @{message.username}
            </CardTitle>
          </Link>

          <MessageOptions />
        </CardHeader>

        <CardContent>
          <p className="text-sm">{message.content}</p>
        </CardContent>

        <CardFooter className="justify-end">
          <p className="text-xs">
            {dayjs(message.createdAt).format("MM/DD/YYYY")}
          </p>
        </CardFooter>
      </Card>
    </MessageContext.Provider>
  );
}
