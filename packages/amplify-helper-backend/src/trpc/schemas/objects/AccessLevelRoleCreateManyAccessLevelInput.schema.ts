import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateManyAccessLevelInput> = z
  .object({
    id: z.string().optional(),
    configurationId: z.string().optional().nullable(),
    discordRoleId: z.string(),
  })
  .strict()

export const AccessLevelRoleCreateManyAccessLevelInputObjectSchema = Schema
