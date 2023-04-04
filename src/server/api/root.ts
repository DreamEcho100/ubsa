import { generalRouter } from "./routers/general";
import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  general: generalRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
