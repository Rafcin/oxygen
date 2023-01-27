import { z } from 'zod'
import { AnswerCreateWithoutParticipationInputObjectSchema } from './AnswerCreateWithoutParticipationInput.schema'
import { AnswerUncheckedCreateWithoutParticipationInputObjectSchema } from './AnswerUncheckedCreateWithoutParticipationInput.schema'
import { AnswerCreateOrConnectWithoutParticipationInputObjectSchema } from './AnswerCreateOrConnectWithoutParticipationInput.schema'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerCreateNestedOneWithoutParticipationInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AnswerCreateWithoutParticipationInputObjectSchema),
        z.lazy(() => AnswerUncheckedCreateWithoutParticipationInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AnswerCreateOrConnectWithoutParticipationInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AnswerWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AnswerCreateNestedOneWithoutParticipationInputObjectSchema = Schema
