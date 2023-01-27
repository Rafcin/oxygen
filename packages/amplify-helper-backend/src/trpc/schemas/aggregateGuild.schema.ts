import { z } from 'zod'
import { GuildOrderByWithRelationInputObjectSchema } from './objects/GuildOrderByWithRelationInput.schema'
import { GuildWhereInputObjectSchema } from './objects/GuildWhereInput.schema'
import { GuildWhereUniqueInputObjectSchema } from './objects/GuildWhereUniqueInput.schema'
import { GuildCountAggregateInputObjectSchema } from './objects/GuildCountAggregateInput.schema'
import { GuildMinAggregateInputObjectSchema } from './objects/GuildMinAggregateInput.schema'
import { GuildMaxAggregateInputObjectSchema } from './objects/GuildMaxAggregateInput.schema'

export const GuildAggregateSchema = z.object({
  orderBy: z
    .union([
      GuildOrderByWithRelationInputObjectSchema,
      GuildOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GuildWhereInputObjectSchema.optional(),
  cursor: GuildWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), GuildCountAggregateInputObjectSchema])
    .optional(),
  _min: GuildMinAggregateInputObjectSchema.optional(),
  _max: GuildMaxAggregateInputObjectSchema.optional(),
})
