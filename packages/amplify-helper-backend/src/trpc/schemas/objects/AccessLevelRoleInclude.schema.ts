import { z } from 'zod'
import { AccessLevelArgsObjectSchema } from './AccessLevelArgs.schema'
import { ConfigurationArgsObjectSchema } from './ConfigurationArgs.schema'
import { DiscordRoleArgsObjectSchema } from './DiscordRoleArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleInclude> = z
  .object({
    accessLevel: z
      .union([z.boolean(), z.lazy(() => AccessLevelArgsObjectSchema)])
      .optional(),
    Configuration: z
      .union([z.boolean(), z.lazy(() => ConfigurationArgsObjectSchema)])
      .optional(),
    discordRole: z
      .union([z.boolean(), z.lazy(() => DiscordRoleArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const AccessLevelRoleIncludeObjectSchema = Schema
