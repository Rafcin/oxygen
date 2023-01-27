import { z } from 'zod'
import { AnswerUpdateWithoutParticipationInputObjectSchema } from './AnswerUpdateWithoutParticipationInput.schema'
import { AnswerUncheckedUpdateWithoutParticipationInputObjectSchema } from './AnswerUncheckedUpdateWithoutParticipationInput.schema'
import { AnswerCreateWithoutParticipationInputObjectSchema } from './AnswerCreateWithoutParticipationInput.schema'
import { AnswerUncheckedCreateWithoutParticipationInputObjectSchema } from './AnswerUncheckedCreateWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerUpsertWithoutParticipationInput> = z
  .object({
    update: z.union([
      z.lazy(() => AnswerUpdateWithoutParticipationInputObjectSchema),
      z.lazy(() => AnswerUncheckedUpdateWithoutParticipationInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AnswerCreateWithoutParticipationInputObjectSchema),
      z.lazy(() => AnswerUncheckedCreateWithoutParticipationInputObjectSchema),
    ]),
  })
  .strict()

export const AnswerUpsertWithoutParticipationInputObjectSchema = Schema
