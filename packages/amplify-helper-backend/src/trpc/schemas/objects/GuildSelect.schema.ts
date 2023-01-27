import { z } from 'zod'
import { ConfigurationArgsObjectSchema } from './ConfigurationArgs.schema'
import { QuestionFindManySchema } from '../findManyQuestion.schema'
import { EventScheduleFindManySchema } from '../findManyEventSchedule.schema'
import { GuildCountOutputTypeArgsObjectSchema } from './GuildCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
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

export const GuildSelectObjectSchema = Schema
