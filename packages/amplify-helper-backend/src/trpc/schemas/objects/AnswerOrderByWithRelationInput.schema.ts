import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DiscordUserOrderByWithRelationInputObjectSchema } from './DiscordUserOrderByWithRelationInput.schema'
import { QuestionOrderByWithRelationInputObjectSchema } from './QuestionOrderByWithRelationInput.schema'
import { ParticipationOrderByWithRelationInputObjectSchema } from './ParticipationOrderByWithRelationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    selectedAt: z.lazy(() => SortOrderSchema).optional(),
    selectedBy: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    owner: z.lazy(() => DiscordUserOrderByWithRelationInputObjectSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    question: z.lazy(() => QuestionOrderByWithRelationInputObjectSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    participation: z
      .lazy(() => ParticipationOrderByWithRelationInputObjectSchema)
      .optional(),
    participationId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const AnswerOrderByWithRelationInputObjectSchema = Schema
