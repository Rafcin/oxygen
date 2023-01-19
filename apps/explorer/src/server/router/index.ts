import { router } from './trpc'
import { authRouter } from './auth'
import { mapsRouter } from './maps.router'

export const appRouter = router({
  maps: mapsRouter,
  auth: authRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
