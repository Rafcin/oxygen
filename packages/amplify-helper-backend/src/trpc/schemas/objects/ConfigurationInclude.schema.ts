import { z } from 'zod'
import { AccessLevelRoleFindManySchema } from '../findManyAccessLevelRole.schema'
import { GuildArgsObjectSchema } from './GuildArgs.schema'
import { ConfigurationFeatureFindManySchema } from '../findManyConfigurationFeature.schema'
import { ConfigurationCountOutputTypeArgsObjectSchema } from './ConfigurationCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationInclude> = z
  .object({
    roles: z
      .union([z.boolean(), z.lazy(() => AccessLevelRoleFindManySchema)])
      .optional(),
    guild: z.union([z.boolean(), z.lazy(() => GuildArgsObjectSchema)]).optional(),
    features: z
      .union([z.boolean(), z.lazy(() => ConfigurationFeatureFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ConfigurationCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ConfigurationIncludeObjectSchema = Schema
