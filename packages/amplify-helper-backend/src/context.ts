import { Session } from 'next-auth'
import { prisma } from '@/db/'
import { inferAsyncReturnType, router, TRPCError } from '@trpc/server'
import { CreateNextContextOptions } from '@trpc/server/adapters/next'

import type { GetServerSidePropsContext } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { nextAuthOptions } from './next-auth'

// Next API route example - /pages/api/restricted.ts
export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}) => {
  return await unstable_getServerSession(ctx.req, ctx.res, nextAuthOptions)
}

type CreateContextOptions = {
  session: Session | null
}

export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  }
}

export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts
  const session = await getServerAuthSession({ req, res })
  return await createContextInner({
    session,
  })
}

export type Context = inferAsyncReturnType<typeof createContext>

export const createRouter = () => router<Context>()

export function createProtectedRouter() {
  return createRouter().middleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }
    return next({
      ctx: {
        ...ctx,
        session: { ...ctx.session, user: ctx.session.user },
      },
    })
  })
}
