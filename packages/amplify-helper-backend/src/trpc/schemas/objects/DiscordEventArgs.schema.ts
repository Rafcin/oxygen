import { z } from 'zod'
import { DiscordEventSelectObjectSchema } from './DiscordEventSelect.schema'
import { DiscordEventIncludeObjectSchema } from './DiscordEventInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventArgs> = z
  .object({
    select: z.lazy(() => DiscordEventSelectObjectSchema).optional(),
    include: z.lazy(() => DiscordEventIncludeObjectSchema).optional(),
  })
  .strict()

export const DiscordEventArgsObjectSchema = Schema
