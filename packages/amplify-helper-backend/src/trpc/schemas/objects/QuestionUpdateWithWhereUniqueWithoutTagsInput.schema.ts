import { z } from 'zod'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionUpdateWithoutTagsInputObjectSchema } from './QuestionUpdateWithoutTagsInput.schema'
import { QuestionUncheckedUpdateWithoutTagsInputObjectSchema } from './QuestionUncheckedUpdateWithoutTagsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutTagsInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => QuestionUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionUpdateWithWhereUniqueWithoutTagsInputObjectSchema = Schema
