import { z } from 'zod'
import { DiscordEventArgsObjectSchema } from './DiscordEventArgs.schema'
import { DiscordUserArgsObjectSchema } from './DiscordUserArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeInclude> = z
  .object({
    event: z
      .union([z.boolean(), z.lazy(() => DiscordEventArgsObjectSchema)])
      .optional(),
    member: z
      .union([z.boolean(), z.lazy(() => DiscordUserArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const DiscordEventAttendeeIncludeObjectSchema = Schema
