import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/verceldb/schema/*",
  out: "./src/verceldb/migrations",
  breakpoints: false,
} satisfies Config;