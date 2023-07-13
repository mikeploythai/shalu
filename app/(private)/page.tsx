import MessageBox from "@/components/message-box";
import MessageCard from "@/components/message-card/message-card";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/drizzle/client";
import { message, type Message } from "@/drizzle/schema";
import { UserContext } from "@/lib/context";
import {
  ClerkLoaded,
  ClerkLoading,
  currentUser,
  redirectToSignIn,
} from "@clerk/nextjs";
import { desc } from "drizzle-orm";
import { Fragment } from "react";

export default async function Home() {
  const user = await currentUser();
  const messages: Message[] = await db
    .select()
    .from(message)
    .orderBy(desc(message.isPinned), desc(message.createdAt));

  if (!user) {
    redirectToSignIn();
  }

  return (
    <UserContext.Provider value={JSON.stringify(user)}>
      <main className="space-y-4 p-4">
        <MessageBox />

        {!messages.length ? (
          <p className="text-center">There are no messages ☹️</p>
        ) : (
          <section className="mx-auto grid max-w-screen-xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {messages.map((message) => (
              <Fragment key={message.id}>
                <ClerkLoading>
                  <Skeleton className="h-44 w-full rounded-xl" />
                </ClerkLoading>

                <ClerkLoaded>
                  <MessageCard key={message.id} message={message} />
                </ClerkLoaded>
              </Fragment>
            ))}
          </section>
        )}
      </main>
    </UserContext.Provider>
  );
}
