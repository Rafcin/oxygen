import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { QuestionUpdateOneRequiredWithoutAnswerNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutAnswerNestedInput.schema'
import { ParticipationUpdateOneRequiredWithoutAnswerNestedInputObjectSchema } from './ParticipationUpdateOneRequiredWithoutAnswerNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerUpdateWithoutOwnerInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    selectedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    selectedBy: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    content: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    question: z
      .lazy(() => QuestionUpdateOneRequiredWithoutAnswerNestedInputObjectSchema)
      .optional(),
    participation: z
      .lazy(() => ParticipationUpdateOneRequiredWithoutAnswerNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const AnswerUpdateWithoutOwnerInputObjectSchema = Schema
