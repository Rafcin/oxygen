import { z } from 'zod'
import { ParticipationCreateWithoutAnswerInputObjectSchema } from './ParticipationCreateWithoutAnswerInput.schema'
import { ParticipationUncheckedCreateWithoutAnswerInputObjectSchema } from './ParticipationUncheckedCreateWithoutAnswerInput.schema'
import { ParticipationCreateOrConnectWithoutAnswerInputObjectSchema } from './ParticipationCreateOrConnectWithoutAnswerInput.schema'
import { ParticipationUpsertWithoutAnswerInputObjectSchema } from './ParticipationUpsertWithoutAnswerInput.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationUpdateWithoutAnswerInputObjectSchema } from './ParticipationUpdateWithoutAnswerInput.schema'
import { ParticipationUncheckedUpdateWithoutAnswerInputObjectSchema } from './ParticipationUncheckedUpdateWithoutAnswerInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateOneRequiredWithoutAnswerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ParticipationCreateWithoutAnswerInputObjectSchema),
          z.lazy(() => ParticipationUncheckedCreateWithoutAnswerInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ParticipationCreateOrConnectWithoutAnswerInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ParticipationUpsertWithoutAnswerInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ParticipationWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ParticipationUpdateWithoutAnswerInputObjectSchema),
          z.lazy(() => ParticipationUncheckedUpdateWithoutAnswerInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const ParticipationUpdateOneRequiredWithoutAnswerNestedInputObjectSchema =
  Schema
