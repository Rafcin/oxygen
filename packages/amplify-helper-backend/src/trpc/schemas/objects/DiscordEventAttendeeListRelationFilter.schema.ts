import { z } from 'zod'
import { DiscordEventAttendeeWhereInputObjectSchema } from './DiscordEventAttendeeWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeListRelationFilter> = z
  .object({
    every: z.lazy(() => DiscordEventAttendeeWhereInputObjectSchema).optional(),
    some: z.lazy(() => DiscordEventAttendeeWhereInputObjectSchema).optional(),
    none: z.lazy(() => DiscordEventAttendeeWhereInputObjectSchema).optional(),
  })
  .strict()

export const DiscordEventAttendeeListRelationFilterObjectSchema = Schema
