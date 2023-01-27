import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    discordRoleId: z.string().optional(),
  })
  .strict()

export const AccessLevelRoleWhereUniqueInputObjectSchema = Schema
