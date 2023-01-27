import { z } from 'zod'
import { QuestionUpdateWithoutParticipationInputObjectSchema } from './QuestionUpdateWithoutParticipationInput.schema'
import { QuestionUncheckedUpdateWithoutParticipationInputObjectSchema } from './QuestionUncheckedUpdateWithoutParticipationInput.schema'
import { QuestionCreateWithoutParticipationInputObjectSchema } from './QuestionCreateWithoutParticipationInput.schema'
import { QuestionUncheckedCreateWithoutParticipationInputObjectSchema } from './QuestionUncheckedCreateWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUpsertWithoutParticipationInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionUpdateWithoutParticipationInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutParticipationInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutParticipationInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutParticipationInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionUpsertWithoutParticipationInputObjectSchema = Schema
