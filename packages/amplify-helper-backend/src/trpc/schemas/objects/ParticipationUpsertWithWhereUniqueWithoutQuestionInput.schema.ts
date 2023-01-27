import { z } from 'zod'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationUpdateWithoutQuestionInputObjectSchema } from './ParticipationUpdateWithoutQuestionInput.schema'
import { ParticipationUncheckedUpdateWithoutQuestionInputObjectSchema } from './ParticipationUncheckedUpdateWithoutQuestionInput.schema'
import { ParticipationCreateWithoutQuestionInputObjectSchema } from './ParticipationCreateWithoutQuestionInput.schema'
import { ParticipationUncheckedCreateWithoutQuestionInputObjectSchema } from './ParticipationUncheckedCreateWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpsertWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ParticipationUpdateWithoutQuestionInputObjectSchema),
        z.lazy(() => ParticipationUncheckedUpdateWithoutQuestionInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutQuestionInputObjectSchema),
        z.lazy(() => ParticipationUncheckedCreateWithoutQuestionInputObjectSchema),
      ]),
    })
    .strict()

export const ParticipationUpsertWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema
