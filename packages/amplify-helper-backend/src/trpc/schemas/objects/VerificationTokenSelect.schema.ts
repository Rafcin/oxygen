import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.VerificationTokenSelect> = z
  .object({
    identifier: z.boolean().optional(),
    token: z.boolean().optional(),
    expires: z.boolean().optional(),
  })
  .strict()

export const VerificationTokenSelectObjectSchema = Schema
