import { z } from 'zod'
import { DiscordEventAttendeeCreateManyEventInputObjectSchema } from './DiscordEventAttendeeCreateManyEventInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCreateManyEventInputEnvelope> = z
  .object({
    data: z.lazy(() => DiscordEventAttendeeCreateManyEventInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const DiscordEventAttendeeCreateManyEventInputEnvelopeObjectSchema = Schema
