import { z } from 'zod'
import { EventScheduleCreateManyGuildInputObjectSchema } from './EventScheduleCreateManyGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateManyGuildInputEnvelope> = z
  .object({
    data: z.lazy(() => EventScheduleCreateManyGuildInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const EventScheduleCreateManyGuildInputEnvelopeObjectSchema = Schema
