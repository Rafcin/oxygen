import { z } from 'zod'
import { ParticipationCreateWithoutAnswerInputObjectSchema } from './ParticipationCreateWithoutAnswerInput.schema'
import { ParticipationUncheckedCreateWithoutAnswerInputObjectSchema } from './ParticipationUncheckedCreateWithoutAnswerInput.schema'
import { ParticipationCreateOrConnectWithoutAnswerInputObjectSchema } from './ParticipationCreateOrConnectWithoutAnswerInput.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateNestedOneWithoutAnswerInput> = z
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
    connect: z.lazy(() => ParticipationWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const ParticipationCreateNestedOneWithoutAnswerInputObjectSchema = Schema
