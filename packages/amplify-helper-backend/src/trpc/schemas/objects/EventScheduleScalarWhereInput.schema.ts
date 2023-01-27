import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EventScheduleScalarWhereInputObjectSchema),
        z.lazy(() => EventScheduleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EventScheduleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EventScheduleScalarWhereInputObjectSchema),
        z.lazy(() => EventScheduleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    guildId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdById: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    schedule: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const EventScheduleScalarWhereInputObjectSchema = Schema
