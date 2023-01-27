import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiscordEventAttendeeScalarWhereInputObjectSchema),
        z.lazy(() => DiscordEventAttendeeScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiscordEventAttendeeScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiscordEventAttendeeScalarWhereInputObjectSchema),
        z.lazy(() => DiscordEventAttendeeScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    eventId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    memberId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    time: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
  })
  .strict()

export const DiscordEventAttendeeScalarWhereInputObjectSchema = Schema
