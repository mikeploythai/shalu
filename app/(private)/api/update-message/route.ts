import { db } from "@/drizzle/client";
import { message, type UnstrictMessage } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const body: UnstrictMessage = await req.json();

  try {
    await db.update(message).set(body).where(eq(message.id, body.id!));

    return new Response("OK");
  } catch (error) {
    throw error;
  }
}
