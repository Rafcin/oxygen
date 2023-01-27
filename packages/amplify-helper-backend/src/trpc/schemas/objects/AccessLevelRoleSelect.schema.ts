import { z } from 'zod'
import { AccessLevelArgsObjectSchema } from './AccessLevelArgs.schema'
import { ConfigurationArgsObjectSchema } from './ConfigurationArgs.schema'
import { DiscordRoleArgsObjectSchema } from './DiscordRoleArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleSelect> = z
  .object({
    id: z.boolean().optional(),
    accessLevel: z
      .union([z.boolean(), z.lazy(() => AccessLevelArgsObjectSchema)])
      .optional(),
    accessLevelId: z.boolean().optional(),
    Configuration: z
      .union([z.boolean(), z.lazy(() => ConfigurationArgsObjectSchema)])
      .optional(),
    configurationId: z.boolean().optional(),
    discordRole: z
      .union([z.boolean(), z.lazy(() => DiscordRoleArgsObjectSchema)])
      .optional(),
    discordRoleId: z.boolean().optional(),
  })
  .strict()

export const AccessLevelRoleSelectObjectSchema = Schema
