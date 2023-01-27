import { z } from 'zod'
import { QuestionCreateWithoutAnswerInputObjectSchema } from './QuestionCreateWithoutAnswerInput.schema'
import { QuestionUncheckedCreateWithoutAnswerInputObjectSchema } from './QuestionUncheckedCreateWithoutAnswerInput.schema'
import { QuestionCreateOrConnectWithoutAnswerInputObjectSchema } from './QuestionCreateOrConnectWithoutAnswerInput.schema'
import { QuestionUpsertWithoutAnswerInputObjectSchema } from './QuestionUpsertWithoutAnswerInput.schema'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionUpdateWithoutAnswerInputObjectSchema } from './QuestionUpdateWithoutAnswerInput.schema'
import { QuestionUncheckedUpdateWithoutAnswerInputObjectSchema } from './QuestionUncheckedUpdateWithoutAnswerInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUpdateOneRequiredWithoutAnswerNestedInput> = z
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
    upsert: z.lazy(() => QuestionUpsertWithoutAnswerInputObjectSchema).optional(),
    connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => QuestionUpdateWithoutAnswerInputObjectSchema),
        z.lazy(() => QuestionUncheckedUpdateWithoutAnswerInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const QuestionUpdateOneRequiredWithoutAnswerNestedInputObjectSchema = Schema
