import { TRPCError } from '@trpc/server'
import { t } from '@/trpc/routers/helpers/createRouter'

/**
 * Reusable middleware to ensure
 * users are logged in
 */
const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  })
})

/**
 * Protected procedure
 **/
export const protectedProcedure = t.procedure.use(isAuthed)
/**
 * Public procedure
 */
export const publicProcedure = t.procedure
