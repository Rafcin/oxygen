import { z } from 'zod'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationCreateWithoutQuestionInputObjectSchema } from './ParticipationCreateWithoutQuestionInput.schema'
import { ParticipationUncheckedCreateWithoutQuestionInputObjectSchema } from './ParticipationUncheckedCreateWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateOrConnectWithoutQuestionInput> = z
  .object({
    where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ParticipationCreateWithoutQuestionInputObjectSchema),
      z.lazy(() => ParticipationUncheckedCreateWithoutQuestionInputObjectSchema),
    ]),
  })
  .strict()

export const ParticipationCreateOrConnectWithoutQuestionInputObjectSchema = Schema
