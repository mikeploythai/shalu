import { db } from "@/drizzle/client";
import { message, type UnstrictMessage } from "@/drizzle/schema";

export async function POST(req: Request) {
  const body: UnstrictMessage = await req.json();

  try {
    await db.insert(message).values(body);

    return new Response("OK");
  } catch (error) {
    throw error;
  }
}
