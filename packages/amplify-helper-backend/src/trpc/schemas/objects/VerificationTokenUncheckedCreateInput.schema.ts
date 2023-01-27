import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z
  .object({
    identifier: z.string(),
    token: z.string(),
    expires: z.date(),
  })
  .strict()

export const VerificationTokenUncheckedCreateInputObjectSchema = Schema