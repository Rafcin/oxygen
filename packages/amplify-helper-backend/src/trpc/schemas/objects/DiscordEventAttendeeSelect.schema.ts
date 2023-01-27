import { z } from 'zod'
import { DiscordEventArgsObjectSchema } from './DiscordEventArgs.schema'
import { DiscordUserArgsObjectSchema } from './DiscordUserArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeSelect> = z
  .object({
    event: z
      .union([z.boolean(), z.lazy(() => DiscordEventArgsObjectSchema)])
      .optional(),
    eventId: z.boolean().optional(),
    member: z
      .union([z.boolean(), z.lazy(() => DiscordUserArgsObjectSchema)])
      .optional(),
    memberId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    time: z.boolean().optional(),
  })
  .strict()

export const DiscordEventAttendeeSelectObjectSchema = Schema
