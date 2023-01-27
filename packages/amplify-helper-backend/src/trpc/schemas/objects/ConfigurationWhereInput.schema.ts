import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { AccessLevelRoleListRelationFilterObjectSchema } from './AccessLevelRoleListRelationFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { GuildRelationFilterObjectSchema } from './GuildRelationFilter.schema'
import { GuildWhereInputObjectSchema } from './GuildWhereInput.schema'
import { ConfigurationFeatureListRelationFilterObjectSchema } from './ConfigurationFeatureListRelationFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConfigurationWhereInputObjectSchema),
        z.lazy(() => ConfigurationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConfigurationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConfigurationWhereInputObjectSchema),
        z.lazy(() => ConfigurationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    roles: z.lazy(() => AccessLevelRoleListRelationFilterObjectSchema).optional(),
    githubOrganization: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    guild: z
      .union([
        z.lazy(() => GuildRelationFilterObjectSchema),
        z.lazy(() => GuildWhereInputObjectSchema),
      ])
      .optional(),
    features: z
      .lazy(() => ConfigurationFeatureListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const ConfigurationWhereInputObjectSchema = Schema
