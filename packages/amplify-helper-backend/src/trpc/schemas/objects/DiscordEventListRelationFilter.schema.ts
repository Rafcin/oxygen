import { z } from 'zod'
import { DiscordEventWhereInputObjectSchema } from './DiscordEventWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventListRelationFilter> = z
  .object({
    every: z.lazy(() => DiscordEventWhereInputObjectSchema).optional(),
    some: z.lazy(() => DiscordEventWhereInputObjectSchema).optional(),
    none: z.lazy(() => DiscordEventWhereInputObjectSchema).optional(),
  })
  .strict()

export const DiscordEventListRelationFilterObjectSchema = Schema
