import { z } from 'zod'
import { EventScheduleCreateManyCreatedByInputObjectSchema } from './EventScheduleCreateManyCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.lazy(() => EventScheduleCreateManyCreatedByInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const EventScheduleCreateManyCreatedByInputEnvelopeObjectSchema = Schema
