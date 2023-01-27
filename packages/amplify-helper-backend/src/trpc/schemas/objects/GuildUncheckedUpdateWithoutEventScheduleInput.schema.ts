import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { ConfigurationUncheckedUpdateOneWithoutGuildNestedInputObjectSchema } from './ConfigurationUncheckedUpdateOneWithoutGuildNestedInput.schema'
import { QuestionUncheckedUpdateManyWithoutGuildNestedInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutGuildNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildUncheckedUpdateWithoutEventScheduleInput> = z
  .object({
    id: z
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
    configuration: z
      .lazy(() => ConfigurationUncheckedUpdateOneWithoutGuildNestedInputObjectSchema)
      .optional(),
    questions: z
      .lazy(() => QuestionUncheckedUpdateManyWithoutGuildNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const GuildUncheckedUpdateWithoutEventScheduleInputObjectSchema = Schema
