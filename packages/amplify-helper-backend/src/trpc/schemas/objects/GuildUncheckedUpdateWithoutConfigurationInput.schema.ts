import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { QuestionUncheckedUpdateManyWithoutGuildNestedInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutGuildNestedInput.schema'
import { EventScheduleUncheckedUpdateManyWithoutGuildNestedInputObjectSchema } from './EventScheduleUncheckedUpdateManyWithoutGuildNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildUncheckedUpdateWithoutConfigurationInput> = z
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
    questions: z
      .lazy(() => QuestionUncheckedUpdateManyWithoutGuildNestedInputObjectSchema)
      .optional(),
    EventSchedule: z
      .lazy(
        () => EventScheduleUncheckedUpdateManyWithoutGuildNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const GuildUncheckedUpdateWithoutConfigurationInputObjectSchema = Schema
