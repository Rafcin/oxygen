import { z } from 'zod'
import { DiscordUserOrderByWithRelationInputObjectSchema } from './objects/DiscordUserOrderByWithRelationInput.schema'
import { DiscordUserWhereInputObjectSchema } from './objects/DiscordUserWhereInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './objects/DiscordUserWhereUniqueInput.schema'
import { DiscordUserCountAggregateInputObjectSchema } from './objects/DiscordUserCountAggregateInput.schema'
import { DiscordUserMinAggregateInputObjectSchema } from './objects/DiscordUserMinAggregateInput.schema'
import { DiscordUserMaxAggregateInputObjectSchema } from './objects/DiscordUserMaxAggregateInput.schema'

export const DiscordUserAggregateSchema = z.object({
  orderBy: z
    .union([
      DiscordUserOrderByWithRelationInputObjectSchema,
      DiscordUserOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DiscordUserWhereInputObjectSchema.optional(),
  cursor: DiscordUserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DiscordUserCountAggregateInputObjectSchema])
    .optional(),
  _min: DiscordUserMinAggregateInputObjectSchema.optional(),
  _max: DiscordUserMaxAggregateInputObjectSchema.optional(),
})
