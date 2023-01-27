import { z } from 'zod'
import { DiscordRoleWhereInputObjectSchema } from './DiscordRoleWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleRelationFilter> = z
  .object({
    is: z.lazy(() => DiscordRoleWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => DiscordRoleWhereInputObjectSchema).optional(),
  })
  .strict()

export const DiscordRoleRelationFilterObjectSchema = Schema
