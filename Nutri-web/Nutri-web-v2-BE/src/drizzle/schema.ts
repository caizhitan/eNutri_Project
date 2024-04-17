import { uuid, uniqueIndex, varchar, pgTable } from "drizzle-orm/pg-core";

export const doctors = pgTable("doctors", {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 256 })
}, (doctors) => {
    return {
        nameIndex: uniqueIndex("name_idx").on(doctors.name),
    }
});

export type Doctor = typeof doctors.$inferSelect;
export type NewDoctor = typeof doctors.$inferInsert;