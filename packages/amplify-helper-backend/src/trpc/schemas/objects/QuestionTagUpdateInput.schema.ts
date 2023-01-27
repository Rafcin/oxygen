import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { QuestionUpdateManyWithoutTagsNestedInputObjectSchema } from './QuestionUpdateManyWithoutTagsNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    questions: z
      .lazy(() => QuestionUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const QuestionTagUpdateInputObjectSchema = Schema
