import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { GuildUpdateOneRequiredWithoutEventScheduleNestedInputObjectSchema } from './GuildUpdateOneRequiredWithoutEventScheduleNestedInput.schema'
import { DiscordUserUpdateOneRequiredWithoutCreatedSchedulesNestedInputObjectSchema } from './DiscordUserUpdateOneRequiredWithoutCreatedSchedulesNestedInput.schema'
import { DiscordEventUpdateManyWithoutScheduleNestedInputObjectSchema } from './DiscordEventUpdateManyWithoutScheduleNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUpdateInput> = z
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
    guild: z
      .lazy(() => GuildUpdateOneRequiredWithoutEventScheduleNestedInputObjectSchema)
      .optional(),
    createdBy: z
      .lazy(
        () =>
          DiscordUserUpdateOneRequiredWithoutCreatedSchedulesNestedInputObjectSchema
      )
      .optional(),
    event: z
      .lazy(() => DiscordEventUpdateManyWithoutScheduleNestedInputObjectSchema)
      .optional(),
    schedule: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EventScheduleUpdateInputObjectSchema = Schema