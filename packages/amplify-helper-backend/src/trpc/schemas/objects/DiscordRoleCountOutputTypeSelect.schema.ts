import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleCountOutputTypeSelect> = z
  .object({
    participation: z.boolean().optional(),
  })
  .strict()

export const DiscordRoleCountOutputTypeSelectObjectSchema = Schema
