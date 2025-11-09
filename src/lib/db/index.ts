import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool, type PoolConfig } from "pg";

import * as schema from "./schema";

declare global {
  var __placesDbPool: Pool | undefined;
}

let dbInstance: NodePgDatabase<typeof schema> | null = null;

function createPool(connectionString: string) {
  const poolConfig: PoolConfig = {
    connectionString,
  };

  if ((process.env.DATABASE_SSL ?? "").toLowerCase() === "true") {
    poolConfig.ssl = {
      rejectUnauthorized: false,
    };
  }

  const pool = global.__placesDbPool ?? new Pool(poolConfig);

  if (process.env.NODE_ENV !== "production") {
    global.__placesDbPool = pool;
  }

  return pool;
}

export function getDb() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set. Add it to your environment to use the places admin.");
  }

  if (!dbInstance) {
    const pool = createPool(connectionString);
    dbInstance = drizzle(pool, { schema });
  }

  return dbInstance;
}

export * from "./schema";
