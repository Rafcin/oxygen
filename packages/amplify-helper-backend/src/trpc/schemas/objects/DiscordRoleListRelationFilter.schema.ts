import { z } from 'zod'
import { DiscordRoleWhereInputObjectSchema } from './DiscordRoleWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleListRelationFilter> = z
  .object({
    every: z.lazy(() => DiscordRoleWhereInputObjectSchema).optional(),
    some: z.lazy(() => DiscordRoleWhereInputObjectSchema).optional(),
    none: z.lazy(() => DiscordRoleWhereInputObjectSchema).optional(),
  })
  .strict()

export const DiscordRoleListRelationFilterObjectSchema = Schema
