import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ClerkLoaded,
  ClerkLoading,
  SignOutButton,
  currentUser,
} from "@clerk/nextjs";
import { ExitIcon, RocketIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";

export default async function UserNav() {
  const user = await currentUser();

  if (!user) return;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <ClerkLoading>
          <Skeleton className="h-10 w-10 rounded-full" />
        </ClerkLoading>

        <ClerkLoaded>
          <Avatar className="bg-slate-200 dark:bg-slate-800">
            <AvatarImage
              src={user.imageUrl}
              alt={`${user.username}'s profile picture`}
            />
          </Avatar>
        </ClerkLoaded>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mx-2 my-1">
        <DropdownMenuLabel className="flex flex-col items-end gap-1.5">
          <h4 className="text-lg font-semibold tracking-tight">
            @{user.username}
          </h4>

          <p className="flex items-center gap-1.5 text-xs font-normal text-slate-500 dark:text-slate-400">
            <RocketIcon />
            Joined {dayjs(user.createdAt).format("MM/DD/YYYY")}
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <SignOutButton>
          <DropdownMenuItem className="flex items-center justify-end gap-1.5 hover:cursor-pointer focus:bg-red-500 dark:focus:bg-red-900">
            Sign out
            <ExitIcon />
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
