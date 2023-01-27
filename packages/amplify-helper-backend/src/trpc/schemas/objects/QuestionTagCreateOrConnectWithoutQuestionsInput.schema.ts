import { z } from 'zod'
import { QuestionTagWhereUniqueInputObjectSchema } from './QuestionTagWhereUniqueInput.schema'
import { QuestionTagCreateWithoutQuestionsInputObjectSchema } from './QuestionTagCreateWithoutQuestionsInput.schema'
import { QuestionTagUncheckedCreateWithoutQuestionsInputObjectSchema } from './QuestionTagUncheckedCreateWithoutQuestionsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagCreateOrConnectWithoutQuestionsInput> = z
  .object({
    where: z.lazy(() => QuestionTagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => QuestionTagCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => QuestionTagUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionTagCreateOrConnectWithoutQuestionsInputObjectSchema = Schema
