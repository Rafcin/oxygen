import { z } from 'zod'
import { QuestionTagCreateWithoutQuestionsInputObjectSchema } from './QuestionTagCreateWithoutQuestionsInput.schema'
import { QuestionTagUncheckedCreateWithoutQuestionsInputObjectSchema } from './QuestionTagUncheckedCreateWithoutQuestionsInput.schema'
import { QuestionTagCreateOrConnectWithoutQuestionsInputObjectSchema } from './QuestionTagCreateOrConnectWithoutQuestionsInput.schema'
import { QuestionTagWhereUniqueInputObjectSchema } from './QuestionTagWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagCreateNestedOneWithoutQuestionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => QuestionTagCreateWithoutQuestionsInputObjectSchema),
        z.lazy(() => QuestionTagUncheckedCreateWithoutQuestionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => QuestionTagCreateOrConnectWithoutQuestionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => QuestionTagWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const QuestionTagCreateNestedOneWithoutQuestionsInputObjectSchema = Schema
