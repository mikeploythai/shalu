import MessageBox from "@/components/message-box";
import MessageCard from "@/components/message-card/message-card";
import type { Message } from "@/lib/types";

export default async function Home() {
  const res = await fetch(`https://${process.env.MOCK_BACKEND}/messages`, {
    cache: "no-cache",
  });
  const messages: Message[] = await res.json();

  return (
    <main className="space-y-4 p-4">
      <MessageBox />

      <section className="mx-auto grid max-w-screen-xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </section>
    </main>
  );
}
