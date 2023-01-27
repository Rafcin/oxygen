import { z } from 'zod'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionCreateWithoutAnswerInputObjectSchema } from './QuestionCreateWithoutAnswerInput.schema'
import { QuestionUncheckedCreateWithoutAnswerInputObjectSchema } from './QuestionUncheckedCreateWithoutAnswerInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutAnswerInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutAnswerInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutAnswerInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionCreateOrConnectWithoutAnswerInputObjectSchema = Schema
