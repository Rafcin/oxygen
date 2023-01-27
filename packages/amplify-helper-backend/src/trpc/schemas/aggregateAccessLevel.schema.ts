import { z } from 'zod'
import { AccessLevelOrderByWithRelationInputObjectSchema } from './objects/AccessLevelOrderByWithRelationInput.schema'
import { AccessLevelWhereInputObjectSchema } from './objects/AccessLevelWhereInput.schema'
import { AccessLevelWhereUniqueInputObjectSchema } from './objects/AccessLevelWhereUniqueInput.schema'
import { AccessLevelCountAggregateInputObjectSchema } from './objects/AccessLevelCountAggregateInput.schema'
import { AccessLevelMinAggregateInputObjectSchema } from './objects/AccessLevelMinAggregateInput.schema'
import { AccessLevelMaxAggregateInputObjectSchema } from './objects/AccessLevelMaxAggregateInput.schema'

export const AccessLevelAggregateSchema = z.object({
  orderBy: z
    .union([
      AccessLevelOrderByWithRelationInputObjectSchema,
      AccessLevelOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AccessLevelWhereInputObjectSchema.optional(),
  cursor: AccessLevelWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), AccessLevelCountAggregateInputObjectSchema])
    .optional(),
  _min: AccessLevelMinAggregateInputObjectSchema.optional(),
  _max: AccessLevelMaxAggregateInputObjectSchema.optional(),
})
