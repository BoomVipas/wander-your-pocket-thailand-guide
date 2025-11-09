import {
  boolean,
  doublePrecision,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const places = pgTable("places", {
  id: serial("id").primaryKey(),
  googlePlaceId: varchar("google_place_id", { length: 255 }).unique(),
  slug: varchar("slug", { length: 255 }).unique(),
  name: varchar("name", { length: 255 }),
  isActive: boolean("is_active").default(true),
  isFeatured: boolean("is_featured").default(false),
  categoryKey: varchar("category_key", { length: 255 }),
  superCategory: varchar("super_category", { length: 255 }),
  theme: varchar("theme", { length: 255 }),
  tagline: varchar("tagline", { length: 255 }),
  shortDescription: text("short_description"),
  longDescription: text("long_description"),
  address: text("address"),
  latitude: doublePrecision("latitude"),
  longitude: doublePrecision("longitude"),
  photoReference: text("photo_reference"),
  photoAttribution: text("photo_attribution"),
  bookingUrl: varchar("booking_url", { length: 255 }),
  ttsAudioPath: varchar("tts_audio_path", { length: 255 }),
  sortOrder: integer("sort_order"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type Place = typeof places.$inferSelect;
export type InsertPlace = typeof places.$inferInsert;
