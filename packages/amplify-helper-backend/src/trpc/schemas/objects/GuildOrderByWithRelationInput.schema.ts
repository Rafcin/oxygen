import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ConfigurationOrderByWithRelationInputObjectSchema } from './ConfigurationOrderByWithRelationInput.schema'
import { QuestionOrderByRelationAggregateInputObjectSchema } from './QuestionOrderByRelationAggregateInput.schema'
import { EventScheduleOrderByRelationAggregateInputObjectSchema } from './EventScheduleOrderByRelationAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    configuration: z
      .lazy(() => ConfigurationOrderByWithRelationInputObjectSchema)
      .optional(),
    questions: z
      .lazy(() => QuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    EventSchedule: z
      .lazy(() => EventScheduleOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const GuildOrderByWithRelationInputObjectSchema = Schema
