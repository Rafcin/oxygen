import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.SessionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string().optional(),
  })
  .strict()

export const SessionWhereUniqueInputObjectSchema = Schema
