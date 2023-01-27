import { z } from 'zod'
import { QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema'
import { QuestionUpdateManyMutationInputObjectSchema } from './QuestionUpdateManyMutationInput.schema'
import { QuestionUncheckedUpdateManyWithoutQuestionsInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutQuestionsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutTagsInput> = z
  .object({
    where: z.lazy(() => QuestionScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => QuestionUpdateManyMutationInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateManyWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionUpdateManyWithWhereWithoutTagsInputObjectSchema = Schema
