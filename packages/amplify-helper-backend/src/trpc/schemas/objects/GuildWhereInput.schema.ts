import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { ConfigurationRelationFilterObjectSchema } from './ConfigurationRelationFilter.schema'
import { ConfigurationWhereInputObjectSchema } from './ConfigurationWhereInput.schema'
import { QuestionListRelationFilterObjectSchema } from './QuestionListRelationFilter.schema'
import { EventScheduleListRelationFilterObjectSchema } from './EventScheduleListRelationFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GuildWhereInputObjectSchema),
        z.lazy(() => GuildWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GuildWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GuildWhereInputObjectSchema),
        z.lazy(() => GuildWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    configuration: z
      .union([
        z.lazy(() => ConfigurationRelationFilterObjectSchema),
        z.lazy(() => ConfigurationWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    questions: z.lazy(() => QuestionListRelationFilterObjectSchema).optional(),
    EventSchedule: z
      .lazy(() => EventScheduleListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const GuildWhereInputObjectSchema = Schema
