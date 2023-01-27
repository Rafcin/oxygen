import { z } from 'zod'
import { ParticipationUpdateWithoutAnswerInputObjectSchema } from './ParticipationUpdateWithoutAnswerInput.schema'
import { ParticipationUncheckedUpdateWithoutAnswerInputObjectSchema } from './ParticipationUncheckedUpdateWithoutAnswerInput.schema'
import { ParticipationCreateWithoutAnswerInputObjectSchema } from './ParticipationCreateWithoutAnswerInput.schema'
import { ParticipationUncheckedCreateWithoutAnswerInputObjectSchema } from './ParticipationUncheckedCreateWithoutAnswerInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpsertWithoutAnswerInput> = z
  .object({
    update: z.union([
      z.lazy(() => ParticipationUpdateWithoutAnswerInputObjectSchema),
      z.lazy(() => ParticipationUncheckedUpdateWithoutAnswerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ParticipationCreateWithoutAnswerInputObjectSchema),
      z.lazy(() => ParticipationUncheckedCreateWithoutAnswerInputObjectSchema),
    ]),
  })
  .strict()

export const ParticipationUpsertWithoutAnswerInputObjectSchema = Schema
