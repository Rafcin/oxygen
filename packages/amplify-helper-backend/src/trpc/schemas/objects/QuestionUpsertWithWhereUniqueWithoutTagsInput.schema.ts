import { z } from 'zod'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionUpdateWithoutTagsInputObjectSchema } from './QuestionUpdateWithoutTagsInput.schema'
import { QuestionUncheckedUpdateWithoutTagsInputObjectSchema } from './QuestionUncheckedUpdateWithoutTagsInput.schema'
import { QuestionCreateWithoutTagsInputObjectSchema } from './QuestionCreateWithoutTagsInput.schema'
import { QuestionUncheckedCreateWithoutTagsInputObjectSchema } from './QuestionUncheckedCreateWithoutTagsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutTagsInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => QuestionUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutTagsInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionUpsertWithWhereUniqueWithoutTagsInputObjectSchema = Schema
