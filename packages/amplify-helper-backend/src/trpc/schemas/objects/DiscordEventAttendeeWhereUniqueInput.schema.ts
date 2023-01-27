import { z } from 'zod'
import { DiscordEventAttendeeEventIdMemberIdCompoundUniqueInputObjectSchema } from './DiscordEventAttendeeEventIdMemberIdCompoundUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeWhereUniqueInput> = z
  .object({
    eventId_memberId: z
      .lazy(() => DiscordEventAttendeeEventIdMemberIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordEventAttendeeWhereUniqueInputObjectSchema = Schema
