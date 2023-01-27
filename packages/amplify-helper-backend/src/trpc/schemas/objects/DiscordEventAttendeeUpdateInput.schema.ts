import { z } from 'zod'
import { DiscordEventUpdateOneRequiredWithoutAttendeesNestedInputObjectSchema } from './DiscordEventUpdateOneRequiredWithoutAttendeesNestedInput.schema'
import { DiscordUserUpdateOneRequiredWithoutAttendedNestedInputObjectSchema } from './DiscordUserUpdateOneRequiredWithoutAttendedNestedInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUpdateInput> = z
  .object({
    event: z
      .lazy(
        () => DiscordEventUpdateOneRequiredWithoutAttendeesNestedInputObjectSchema
      )
      .optional(),
    member: z
      .lazy(() => DiscordUserUpdateOneRequiredWithoutAttendedNestedInputObjectSchema)
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
    time: z
      .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict()

export const DiscordEventAttendeeUpdateInputObjectSchema = Schema
