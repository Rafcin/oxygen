import { createTRPCRouter } from './trpc'
import { mapsRouter } from './routers/maps'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  maps: mapsRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
