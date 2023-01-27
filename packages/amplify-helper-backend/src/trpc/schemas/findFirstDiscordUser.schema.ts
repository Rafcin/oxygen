import { z } from 'zod'
import { DiscordUserSelectObjectSchema } from './objects/DiscordUserSelect.schema'
import { DiscordUserIncludeObjectSchema } from './objects/DiscordUserInclude.schema'
import { DiscordUserOrderByWithRelationInputObjectSchema } from './objects/DiscordUserOrderByWithRelationInput.schema'
import { DiscordUserWhereInputObjectSchema } from './objects/DiscordUserWhereInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './objects/DiscordUserWhereUniqueInput.schema'
import { DiscordUserScalarFieldEnumSchema } from './enums/DiscordUserScalarFieldEnum.schema'

export const DiscordUserFindFirstSchema = z.object({
  select: DiscordUserSelectObjectSchema.optional(),
  include: DiscordUserIncludeObjectSchema.optional(),
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
  distinct: z.array(DiscordUserScalarFieldEnumSchema).optional(),
})
