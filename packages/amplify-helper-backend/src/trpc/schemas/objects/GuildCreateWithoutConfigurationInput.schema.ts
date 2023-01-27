import { z } from 'zod'
import { QuestionCreateNestedManyWithoutGuildInputObjectSchema } from './QuestionCreateNestedManyWithoutGuildInput.schema'
import { EventScheduleCreateNestedManyWithoutGuildInputObjectSchema } from './EventScheduleCreateNestedManyWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildCreateWithoutConfigurationInput> = z
  .object({
    id: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    questions: z
      .lazy(() => QuestionCreateNestedManyWithoutGuildInputObjectSchema)
      .optional(),
    EventSchedule: z
      .lazy(() => EventScheduleCreateNestedManyWithoutGuildInputObjectSchema)
      .optional(),
  })
  .strict()

export const GuildCreateWithoutConfigurationInputObjectSchema = Schema
