import { z } from 'zod'
import { QuestionTagCreateWithoutQuestionsInputObjectSchema } from './QuestionTagCreateWithoutQuestionsInput.schema'
import { QuestionTagUncheckedCreateWithoutQuestionsInputObjectSchema } from './QuestionTagUncheckedCreateWithoutQuestionsInput.schema'
import { QuestionTagCreateOrConnectWithoutQuestionsInputObjectSchema } from './QuestionTagCreateOrConnectWithoutQuestionsInput.schema'
import { QuestionTagUpsertWithoutQuestionsInputObjectSchema } from './QuestionTagUpsertWithoutQuestionsInput.schema'
import { QuestionTagWhereUniqueInputObjectSchema } from './QuestionTagWhereUniqueInput.schema'
import { QuestionTagUpdateWithoutQuestionsInputObjectSchema } from './QuestionTagUpdateWithoutQuestionsInput.schema'
import { QuestionTagUncheckedUpdateWithoutQuestionsInputObjectSchema } from './QuestionTagUncheckedUpdateWithoutQuestionsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagUpdateOneWithoutQuestionsNestedInput> = z
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
    upsert: z
      .lazy(() => QuestionTagUpsertWithoutQuestionsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => QuestionTagWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => QuestionTagUpdateWithoutQuestionsInputObjectSchema),
        z.lazy(() => QuestionTagUncheckedUpdateWithoutQuestionsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const QuestionTagUpdateOneWithoutQuestionsNestedInputObjectSchema = Schema
