import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccessLevelRoleOrderByRelationAggregateInputObjectSchema } from './AccessLevelRoleOrderByRelationAggregateInput.schema'
import { GuildOrderByWithRelationInputObjectSchema } from './GuildOrderByWithRelationInput.schema'
import { ConfigurationFeatureOrderByRelationAggregateInputObjectSchema } from './ConfigurationFeatureOrderByRelationAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    roles: z
      .lazy(() => AccessLevelRoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    githubOrganization: z.lazy(() => SortOrderSchema).optional(),
    guild: z.lazy(() => GuildOrderByWithRelationInputObjectSchema).optional(),
    features: z
      .lazy(() => ConfigurationFeatureOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const ConfigurationOrderByWithRelationInputObjectSchema = Schema
