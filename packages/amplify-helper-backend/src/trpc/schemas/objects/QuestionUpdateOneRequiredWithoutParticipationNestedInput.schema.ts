import { z } from 'zod'
import { QuestionCreateWithoutParticipationInputObjectSchema } from './QuestionCreateWithoutParticipationInput.schema'
import { QuestionUncheckedCreateWithoutParticipationInputObjectSchema } from './QuestionUncheckedCreateWithoutParticipationInput.schema'
import { QuestionCreateOrConnectWithoutParticipationInputObjectSchema } from './QuestionCreateOrConnectWithoutParticipationInput.schema'
import { QuestionUpsertWithoutParticipationInputObjectSchema } from './QuestionUpsertWithoutParticipationInput.schema'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionUpdateWithoutParticipationInputObjectSchema } from './QuestionUpdateWithoutParticipationInput.schema'
import { QuestionUncheckedUpdateWithoutParticipationInputObjectSchema } from './QuestionUncheckedUpdateWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUpdateOneRequiredWithoutParticipationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutParticipationInputObjectSchema),
          z.lazy(() => QuestionUncheckedCreateWithoutParticipationInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => QuestionCreateOrConnectWithoutParticipationInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => QuestionUpsertWithoutParticipationInputObjectSchema)
        .optional(),
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => QuestionUpdateWithoutParticipationInputObjectSchema),
          z.lazy(() => QuestionUncheckedUpdateWithoutParticipationInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const QuestionUpdateOneRequiredWithoutParticipationNestedInputObjectSchema =
  Schema
