import { z } from 'zod'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionCreateWithoutTagsInputObjectSchema } from './QuestionCreateWithoutTagsInput.schema'
import { QuestionUncheckedCreateWithoutTagsInputObjectSchema } from './QuestionUncheckedCreateWithoutTagsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutTagsInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutTagsInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionCreateOrConnectWithoutTagsInputObjectSchema = Schema
