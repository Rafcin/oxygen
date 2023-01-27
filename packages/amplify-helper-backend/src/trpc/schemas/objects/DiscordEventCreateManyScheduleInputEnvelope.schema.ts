import { z } from 'zod'
import { DiscordEventCreateManyScheduleInputObjectSchema } from './DiscordEventCreateManyScheduleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventCreateManyScheduleInputEnvelope> = z
  .object({
    data: z.lazy(() => DiscordEventCreateManyScheduleInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const DiscordEventCreateManyScheduleInputEnvelopeObjectSchema = Schema
