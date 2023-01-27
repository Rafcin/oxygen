import { z } from 'zod'
import { DiscordEventAttendeeCreateManyMemberInputObjectSchema } from './DiscordEventAttendeeCreateManyMemberInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCreateManyMemberInputEnvelope> = z
  .object({
    data: z
      .lazy(() => DiscordEventAttendeeCreateManyMemberInputObjectSchema)
      .array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const DiscordEventAttendeeCreateManyMemberInputEnvelopeObjectSchema = Schema
