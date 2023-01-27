import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccessLevelOrderByWithRelationInputObjectSchema } from './AccessLevelOrderByWithRelationInput.schema'
import { ConfigurationOrderByWithRelationInputObjectSchema } from './ConfigurationOrderByWithRelationInput.schema'
import { DiscordRoleOrderByWithRelationInputObjectSchema } from './DiscordRoleOrderByWithRelationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    accessLevel: z
      .lazy(() => AccessLevelOrderByWithRelationInputObjectSchema)
      .optional(),
    accessLevelId: z.lazy(() => SortOrderSchema).optional(),
    Configuration: z
      .lazy(() => ConfigurationOrderByWithRelationInputObjectSchema)
      .optional(),
    configurationId: z.lazy(() => SortOrderSchema).optional(),
    discordRole: z
      .lazy(() => DiscordRoleOrderByWithRelationInputObjectSchema)
      .optional(),
    discordRoleId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const AccessLevelRoleOrderByWithRelationInputObjectSchema = Schema
