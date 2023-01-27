import { z } from 'zod'
import { DiscordUserWhereInputObjectSchema } from './objects/DiscordUserWhereInput.schema'
import { DiscordUserOrderByWithAggregationInputObjectSchema } from './objects/DiscordUserOrderByWithAggregationInput.schema'
import { DiscordUserScalarWhereWithAggregatesInputObjectSchema } from './objects/DiscordUserScalarWhereWithAggregatesInput.schema'
import { DiscordUserScalarFieldEnumSchema } from './enums/DiscordUserScalarFieldEnum.schema'

export const DiscordUserGroupBySchema = z.object({
  where: DiscordUserWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiscordUserOrderByWithAggregationInputObjectSchema,
      DiscordUserOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DiscordUserScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiscordUserScalarFieldEnumSchema),
})
