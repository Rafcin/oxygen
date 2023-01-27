import { z } from 'zod'
import { ConfigurationUncheckedCreateNestedOneWithoutGuildInputObjectSchema } from './ConfigurationUncheckedCreateNestedOneWithoutGuildInput.schema'
import { QuestionUncheckedCreateNestedManyWithoutGuildInputObjectSchema } from './QuestionUncheckedCreateNestedManyWithoutGuildInput.schema'
import { EventScheduleUncheckedCreateNestedManyWithoutGuildInputObjectSchema } from './EventScheduleUncheckedCreateNestedManyWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildUncheckedCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    configuration: z
      .lazy(() => ConfigurationUncheckedCreateNestedOneWithoutGuildInputObjectSchema)
      .optional(),
    questions: z
      .lazy(() => QuestionUncheckedCreateNestedManyWithoutGuildInputObjectSchema)
      .optional(),
    EventSchedule: z
      .lazy(
        () => EventScheduleUncheckedCreateNestedManyWithoutGuildInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const GuildUncheckedCreateInputObjectSchema = Schema
