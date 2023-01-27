import { z } from 'zod'
import { ConfigurationCreateNestedOneWithoutGuildInputObjectSchema } from './ConfigurationCreateNestedOneWithoutGuildInput.schema'
import { EventScheduleCreateNestedManyWithoutGuildInputObjectSchema } from './EventScheduleCreateNestedManyWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildCreateWithoutQuestionsInput> = z
  .object({
    id: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    configuration: z
      .lazy(() => ConfigurationCreateNestedOneWithoutGuildInputObjectSchema)
      .optional(),
    EventSchedule: z
      .lazy(() => EventScheduleCreateNestedManyWithoutGuildInputObjectSchema)
      .optional(),
  })
  .strict()

export const GuildCreateWithoutQuestionsInputObjectSchema = Schema
