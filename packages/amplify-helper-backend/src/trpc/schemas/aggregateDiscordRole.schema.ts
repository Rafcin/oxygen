import { z } from 'zod'
import { DiscordRoleOrderByWithRelationInputObjectSchema } from './objects/DiscordRoleOrderByWithRelationInput.schema'
import { DiscordRoleWhereInputObjectSchema } from './objects/DiscordRoleWhereInput.schema'
import { DiscordRoleWhereUniqueInputObjectSchema } from './objects/DiscordRoleWhereUniqueInput.schema'
import { DiscordRoleCountAggregateInputObjectSchema } from './objects/DiscordRoleCountAggregateInput.schema'
import { DiscordRoleMinAggregateInputObjectSchema } from './objects/DiscordRoleMinAggregateInput.schema'
import { DiscordRoleMaxAggregateInputObjectSchema } from './objects/DiscordRoleMaxAggregateInput.schema'

export const DiscordRoleAggregateSchema = z.object({
  orderBy: z
    .union([
      DiscordRoleOrderByWithRelationInputObjectSchema,
      DiscordRoleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DiscordRoleWhereInputObjectSchema.optional(),
  cursor: DiscordRoleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DiscordRoleCountAggregateInputObjectSchema])
    .optional(),
  _min: DiscordRoleMinAggregateInputObjectSchema.optional(),
  _max: DiscordRoleMaxAggregateInputObjectSchema.optional(),
})
