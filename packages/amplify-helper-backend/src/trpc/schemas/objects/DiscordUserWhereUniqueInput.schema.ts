import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    accountId: z.string().optional(),
  })
  .strict()

export const DiscordUserWhereUniqueInputObjectSchema = Schema
