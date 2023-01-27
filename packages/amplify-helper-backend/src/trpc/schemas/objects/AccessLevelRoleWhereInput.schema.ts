import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { AccessLevelRelationFilterObjectSchema } from './AccessLevelRelationFilter.schema'
import { AccessLevelWhereInputObjectSchema } from './AccessLevelWhereInput.schema'
import { ConfigurationRelationFilterObjectSchema } from './ConfigurationRelationFilter.schema'
import { ConfigurationWhereInputObjectSchema } from './ConfigurationWhereInput.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DiscordRoleRelationFilterObjectSchema } from './DiscordRoleRelationFilter.schema'
import { DiscordRoleWhereInputObjectSchema } from './DiscordRoleWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccessLevelRoleWhereInputObjectSchema),
        z.lazy(() => AccessLevelRoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccessLevelRoleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccessLevelRoleWhereInputObjectSchema),
        z.lazy(() => AccessLevelRoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    accessLevel: z
      .union([
        z.lazy(() => AccessLevelRelationFilterObjectSchema),
        z.lazy(() => AccessLevelWhereInputObjectSchema),
      ])
      .optional(),
    accessLevelId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Configuration: z
      .union([
        z.lazy(() => ConfigurationRelationFilterObjectSchema),
        z.lazy(() => ConfigurationWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    configurationId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    discordRole: z
      .union([
        z.lazy(() => DiscordRoleRelationFilterObjectSchema),
        z.lazy(() => DiscordRoleWhereInputObjectSchema),
      ])
      .optional(),
    discordRoleId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const AccessLevelRoleWhereInputObjectSchema = Schema
