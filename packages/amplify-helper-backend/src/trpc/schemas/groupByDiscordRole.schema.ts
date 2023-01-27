import { z } from 'zod'
import { DiscordRoleWhereInputObjectSchema } from './objects/DiscordRoleWhereInput.schema'
import { DiscordRoleOrderByWithAggregationInputObjectSchema } from './objects/DiscordRoleOrderByWithAggregationInput.schema'
import { DiscordRoleScalarWhereWithAggregatesInputObjectSchema } from './objects/DiscordRoleScalarWhereWithAggregatesInput.schema'
import { DiscordRoleScalarFieldEnumSchema } from './enums/DiscordRoleScalarFieldEnum.schema'

export const DiscordRoleGroupBySchema = z.object({
  where: DiscordRoleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiscordRoleOrderByWithAggregationInputObjectSchema,
      DiscordRoleOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DiscordRoleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiscordRoleScalarFieldEnumSchema),
})
