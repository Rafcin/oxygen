import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { ConfigurationUpdateOneWithoutGuildNestedInputObjectSchema } from './ConfigurationUpdateOneWithoutGuildNestedInput.schema'
import { QuestionUpdateManyWithoutGuildNestedInputObjectSchema } from './QuestionUpdateManyWithoutGuildNestedInput.schema'
import { EventScheduleUpdateManyWithoutGuildNestedInputObjectSchema } from './EventScheduleUpdateManyWithoutGuildNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildUpdateInput> = z
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
      .lazy(() => ConfigurationUpdateOneWithoutGuildNestedInputObjectSchema)
      .optional(),
    questions: z
      .lazy(() => QuestionUpdateManyWithoutGuildNestedInputObjectSchema)
      .optional(),
    EventSchedule: z
      .lazy(() => EventScheduleUpdateManyWithoutGuildNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const GuildUpdateInputObjectSchema = Schema
