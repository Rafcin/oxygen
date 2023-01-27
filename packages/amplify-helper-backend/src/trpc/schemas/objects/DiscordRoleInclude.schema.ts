import { z } from 'zod'
import { ParticipationFindManySchema } from '../findManyParticipation.schema'
import { AccessLevelRoleArgsObjectSchema } from './AccessLevelRoleArgs.schema'
import { DiscordRoleCountOutputTypeArgsObjectSchema } from './DiscordRoleCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleInclude> = z
  .object({
    participation: z
      .union([z.boolean(), z.lazy(() => ParticipationFindManySchema)])
      .optional(),
    role: z
      .union([z.boolean(), z.lazy(() => AccessLevelRoleArgsObjectSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => DiscordRoleCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const DiscordRoleIncludeObjectSchema = Schema
