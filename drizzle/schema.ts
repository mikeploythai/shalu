import { InferModel } from "drizzle-orm";
import {
  boolean,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const message = mysqlTable("message", {
  id: serial("id").primaryKey(),
  authorId: varchar("authorId", { length: 256 }),
  content: varchar("content", { length: 500 }),
  attachments: text("attachments"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
  isPinned: boolean("isPinned"),
});

export type Message = InferModel<typeof message>;
export type UnstrictMessage = InferModel<typeof message, "insert">;
