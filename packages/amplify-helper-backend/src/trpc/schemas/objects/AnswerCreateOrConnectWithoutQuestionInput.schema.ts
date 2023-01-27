import { z } from 'zod'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema'
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerCreateOrConnectWithoutQuestionInput> = z
  .object({
    where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema),
      z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema),
    ]),
  })
  .strict()

export const AnswerCreateOrConnectWithoutQuestionInputObjectSchema = Schema
