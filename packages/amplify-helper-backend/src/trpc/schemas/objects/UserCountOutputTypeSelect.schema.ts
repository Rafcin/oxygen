import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
  .object({
    accounts: z.boolean().optional(),
    sessions: z.boolean().optional(),
  })
  .strict()

export const UserCountOutputTypeSelectObjectSchema = Schema
