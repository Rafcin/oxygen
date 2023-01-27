import { z } from 'zod'
import { DiscordUserCountOutputTypeSelectObjectSchema } from './DiscordUserCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => DiscordUserCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const DiscordUserCountOutputTypeArgsObjectSchema = Schema
