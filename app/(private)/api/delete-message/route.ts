import { db } from "@/drizzle/client";
import { message, type UnstrictMessage } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function DELETE(req: Request) {
  const body: UnstrictMessage = await req.json();

  try {
    await db.delete(message).where(eq(message.id, body.id!));

    return new Response("OK");
  } catch (error) {
    throw error;
  }
}
