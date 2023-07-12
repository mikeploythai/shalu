import { mysqlTable, mysqlSchema, AnyMySqlColumn, serial, varchar, timestamp } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const message = mysqlTable("message", {
	id: serial("id").primaryKey().notNull(),
	authorId: varchar("authorId", { length: 256 }),
	content: varchar("content", { length: 500 }),
	createdAt: timestamp("createdAt", { mode: 'string' }).default(sql`(now())`),
	updatedAt: timestamp("updatedAt", { mode: 'string' }),
});