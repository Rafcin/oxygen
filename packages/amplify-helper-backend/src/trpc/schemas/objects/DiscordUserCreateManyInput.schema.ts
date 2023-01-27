import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateManyInput> = z
  .object({
    id: z.string(),
    accountId: z.string().optional().nullable(),
  })
  .strict()

export const DiscordUserCreateManyInputObjectSchema = Schema
