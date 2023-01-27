import { z } from 'zod'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationUpdateWithoutQuestionInputObjectSchema } from './ParticipationUpdateWithoutQuestionInput.schema'
import { ParticipationUncheckedUpdateWithoutQuestionInputObjectSchema } from './ParticipationUncheckedUpdateWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ParticipationUpdateWithoutQuestionInputObjectSchema),
        z.lazy(() => ParticipationUncheckedUpdateWithoutQuestionInputObjectSchema),
      ]),
    })
    .strict()

export const ParticipationUpdateWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema
