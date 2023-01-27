import { PrismaClient } from '@prisma/client'
import { server_env } from '@/env/server'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      server_env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (server_env.NODE_ENV !== 'production') {
  global.prisma = prisma
}
