import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ParticipationOrderByRelationAggregateInputObjectSchema } from './ParticipationOrderByRelationAggregateInput.schema'
import { AccessLevelRoleOrderByWithRelationInputObjectSchema } from './AccessLevelRoleOrderByWithRelationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    participation: z
      .lazy(() => ParticipationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    role: z
      .lazy(() => AccessLevelRoleOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordRoleOrderByWithRelationInputObjectSchema = Schema
