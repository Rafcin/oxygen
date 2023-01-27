import { z } from 'zod'
import { QuestionCreateWithoutAnswerInputObjectSchema } from './QuestionCreateWithoutAnswerInput.schema'
import { QuestionUncheckedCreateWithoutAnswerInputObjectSchema } from './QuestionUncheckedCreateWithoutAnswerInput.schema'
import { QuestionCreateOrConnectWithoutAnswerInputObjectSchema } from './QuestionCreateOrConnectWithoutAnswerInput.schema'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionCreateNestedOneWithoutAnswerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => QuestionCreateWithoutAnswerInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutAnswerInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => QuestionCreateOrConnectWithoutAnswerInputObjectSchema)
      .optional(),
    connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const QuestionCreateNestedOneWithoutAnswerInputObjectSchema = Schema
