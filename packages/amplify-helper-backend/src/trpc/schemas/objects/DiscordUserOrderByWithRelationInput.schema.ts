import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccountOrderByWithRelationInputObjectSchema } from './AccountOrderByWithRelationInput.schema'
import { ParticipationOrderByRelationAggregateInputObjectSchema } from './ParticipationOrderByRelationAggregateInput.schema'
import { AnswerOrderByRelationAggregateInputObjectSchema } from './AnswerOrderByRelationAggregateInput.schema'
import { DiscordEventAttendeeOrderByRelationAggregateInputObjectSchema } from './DiscordEventAttendeeOrderByRelationAggregateInput.schema'
import { DiscordEventOrderByRelationAggregateInputObjectSchema } from './DiscordEventOrderByRelationAggregateInput.schema'
import { EventScheduleOrderByRelationAggregateInputObjectSchema } from './EventScheduleOrderByRelationAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    account: z.lazy(() => AccountOrderByWithRelationInputObjectSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    participations: z
      .lazy(() => ParticipationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    answers: z
      .lazy(() => AnswerOrderByRelationAggregateInputObjectSchema)
      .optional(),
    attended: z
      .lazy(() => DiscordEventAttendeeOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdEvents: z
      .lazy(() => DiscordEventOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdSchedules: z
      .lazy(() => EventScheduleOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordUserOrderByWithRelationInputObjectSchema = Schema
