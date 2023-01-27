import { z } from 'zod'
import { ConfigurationArgsObjectSchema } from './ConfigurationArgs.schema'
import { QuestionFindManySchema } from '../findManyQuestion.schema'
import { EventScheduleFindManySchema } from '../findManyEventSchedule.schema'
import { GuildCountOutputTypeArgsObjectSchema } from './GuildCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildInclude> = z
  .object({
    configuration: z
      .union([z.boolean(), z.lazy(() => ConfigurationArgsObjectSchema)])
      .optional(),
    questions: z
      .union([z.boolean(), z.lazy(() => QuestionFindManySchema)])
      .optional(),
    EventSchedule: z
      .union([z.boolean(), z.lazy(() => EventScheduleFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => GuildCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const GuildIncludeObjectSchema = Schema
