import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { QuestionOrderByWithRelationInputObjectSchema } from './QuestionOrderByWithRelationInput.schema'
import { DiscordUserOrderByWithRelationInputObjectSchema } from './DiscordUserOrderByWithRelationInput.schema'
import { DiscordRoleOrderByRelationAggregateInputObjectSchema } from './DiscordRoleOrderByRelationAggregateInput.schema'
import { AnswerOrderByWithRelationInputObjectSchema } from './AnswerOrderByWithRelationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    question: z.lazy(() => QuestionOrderByWithRelationInputObjectSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    participant: z
      .lazy(() => DiscordUserOrderByWithRelationInputObjectSchema)
      .optional(),
    participantId: z.lazy(() => SortOrderSchema).optional(),
    participantRoles: z
      .lazy(() => DiscordRoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    answer: z.lazy(() => AnswerOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const ParticipationOrderByWithRelationInputObjectSchema = Schema
