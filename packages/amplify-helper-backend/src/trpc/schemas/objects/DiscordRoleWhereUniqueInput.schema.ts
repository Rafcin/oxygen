import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const DiscordRoleWhereUniqueInputObjectSchema = Schema
