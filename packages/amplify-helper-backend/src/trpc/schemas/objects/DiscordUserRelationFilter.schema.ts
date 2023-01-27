import { z } from 'zod'
import { DiscordUserWhereInputObjectSchema } from './DiscordUserWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserRelationFilter> = z
  .object({
    is: z
      .lazy(() => DiscordUserWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DiscordUserWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const DiscordUserRelationFilterObjectSchema = Schema
