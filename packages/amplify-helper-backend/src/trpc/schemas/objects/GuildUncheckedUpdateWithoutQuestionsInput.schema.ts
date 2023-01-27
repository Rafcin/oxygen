import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { ConfigurationUncheckedUpdateOneWithoutGuildNestedInputObjectSchema } from './ConfigurationUncheckedUpdateOneWithoutGuildNestedInput.schema'
import { EventScheduleUncheckedUpdateManyWithoutGuildNestedInputObjectSchema } from './EventScheduleUncheckedUpdateManyWithoutGuildNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildUncheckedUpdateWithoutQuestionsInput> = z
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
    EventSchedule: z
      .lazy(
        () => EventScheduleUncheckedUpdateManyWithoutGuildNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const GuildUncheckedUpdateWithoutQuestionsInputObjectSchema = Schema
