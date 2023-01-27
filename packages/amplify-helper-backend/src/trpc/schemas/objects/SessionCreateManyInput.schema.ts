import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.SessionCreateManyInput> = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string(),
    userId: z.string(),
    expires: z.date(),
  })
  .strict()

export const SessionCreateManyInputObjectSchema = Schema
