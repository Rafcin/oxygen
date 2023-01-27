import { z } from 'zod'
import { DiscordEventAttendeeSelectObjectSchema } from './DiscordEventAttendeeSelect.schema'
import { DiscordEventAttendeeIncludeObjectSchema } from './DiscordEventAttendeeInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeArgs> = z
  .object({
    select: z.lazy(() => DiscordEventAttendeeSelectObjectSchema).optional(),
    include: z.lazy(() => DiscordEventAttendeeIncludeObjectSchema).optional(),
  })
  .strict()

export const DiscordEventAttendeeArgsObjectSchema = Schema
