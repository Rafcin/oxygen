import { z } from 'zod'
import { DiscordEventWhereInputObjectSchema } from './objects/DiscordEventWhereInput.schema'
import { DiscordEventOrderByWithAggregationInputObjectSchema } from './objects/DiscordEventOrderByWithAggregationInput.schema'
import { DiscordEventScalarWhereWithAggregatesInputObjectSchema } from './objects/DiscordEventScalarWhereWithAggregatesInput.schema'
import { DiscordEventScalarFieldEnumSchema } from './enums/DiscordEventScalarFieldEnum.schema'

export const DiscordEventGroupBySchema = z.object({
  where: DiscordEventWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiscordEventOrderByWithAggregationInputObjectSchema,
      DiscordEventOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DiscordEventScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiscordEventScalarFieldEnumSchema),
})
