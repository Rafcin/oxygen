import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => DiscordEventAttendeeScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventAttendeeScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => DiscordEventAttendeeScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => DiscordEventAttendeeScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventAttendeeScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      eventId: z
        .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      memberId: z
        .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
        .optional(),
      time: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict()

export const DiscordEventAttendeeScalarWhereWithAggregatesInputObjectSchema = Schema
