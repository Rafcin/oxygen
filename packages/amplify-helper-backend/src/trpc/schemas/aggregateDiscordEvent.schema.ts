import { z } from 'zod'
import { DiscordEventOrderByWithRelationInputObjectSchema } from './objects/DiscordEventOrderByWithRelationInput.schema'
import { DiscordEventWhereInputObjectSchema } from './objects/DiscordEventWhereInput.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './objects/DiscordEventWhereUniqueInput.schema'
import { DiscordEventCountAggregateInputObjectSchema } from './objects/DiscordEventCountAggregateInput.schema'
import { DiscordEventMinAggregateInputObjectSchema } from './objects/DiscordEventMinAggregateInput.schema'
import { DiscordEventMaxAggregateInputObjectSchema } from './objects/DiscordEventMaxAggregateInput.schema'

export const DiscordEventAggregateSchema = z.object({
  orderBy: z
    .union([
      DiscordEventOrderByWithRelationInputObjectSchema,
      DiscordEventOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DiscordEventWhereInputObjectSchema.optional(),
  cursor: DiscordEventWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DiscordEventCountAggregateInputObjectSchema])
    .optional(),
  _min: DiscordEventMinAggregateInputObjectSchema.optional(),
  _max: DiscordEventMaxAggregateInputObjectSchema.optional(),
})
