import {
  boolean,
  int,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),

  name: varchar("name", {
    length: 255,
  }).notNull(),

  email: varchar("email", {
    length: 255,
  })
    .notNull()
    .unique(),

  username: varchar("username", {
    length: 255,
  })
    .notNull()
    .unique(),

  password: varchar("password", {
    length: 255,
  }).notNull(),

  isActive: boolean("is_active").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const hotels = mysqlTable("hotels", {
  id: int("id").primaryKey().autoincrement(),
  link: varchar("link", {
    length: 2048,
  }),
  city: varchar("city", {
    length: 32,
  }).notNull(),

  name: varchar("name", {
    length: 255,
  }).notNull(),

  nearestLandmark: varchar("nearest_landmark", {
    length: 128,
  }).notNull(),

  distanceMeters: int("distance_meters").notNull(),

  rating: varchar("rating", {
    length: 16,
  }).notNull(),

  reviewCount: int("review_count").default(0).notNull(),

  reviewSummary: varchar("review_summary", {
    length: 255,
  }).notNull(),

  priceFrom: varchar("price_from", {
    length: 64,
  }),

  imageUrl: varchar("image_url", {
    length: 512,
  }),

  isActive: boolean("is_active").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
