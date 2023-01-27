import { z } from 'zod'
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema'
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema'
import { AnswerCreateOrConnectWithoutQuestionInputObjectSchema } from './AnswerCreateOrConnectWithoutQuestionInput.schema'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerUncheckedCreateNestedOneWithoutQuestionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema),
          z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AnswerCreateOrConnectWithoutQuestionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AnswerWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const AnswerUncheckedCreateNestedOneWithoutQuestionInputObjectSchema = Schema
