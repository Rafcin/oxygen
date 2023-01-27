import { z } from 'zod'
import { ConfigurationCreateNestedOneWithoutGuildInputObjectSchema } from './ConfigurationCreateNestedOneWithoutGuildInput.schema'
import { QuestionCreateNestedManyWithoutGuildInputObjectSchema } from './QuestionCreateNestedManyWithoutGuildInput.schema'
import { EventScheduleCreateNestedManyWithoutGuildInputObjectSchema } from './EventScheduleCreateNestedManyWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    configuration: z
      .lazy(() => ConfigurationCreateNestedOneWithoutGuildInputObjectSchema)
      .optional(),
    questions: z
      .lazy(() => QuestionCreateNestedManyWithoutGuildInputObjectSchema)
      .optional(),
    EventSchedule: z
      .lazy(() => EventScheduleCreateNestedManyWithoutGuildInputObjectSchema)
      .optional(),
  })
  .strict()

export const GuildCreateInputObjectSchema = Schema
