import { z } from 'zod'
import { DiscordEventSelectObjectSchema } from './objects/DiscordEventSelect.schema'
import { DiscordEventIncludeObjectSchema } from './objects/DiscordEventInclude.schema'
import { DiscordEventOrderByWithRelationInputObjectSchema } from './objects/DiscordEventOrderByWithRelationInput.schema'
import { DiscordEventWhereInputObjectSchema } from './objects/DiscordEventWhereInput.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './objects/DiscordEventWhereUniqueInput.schema'
import { DiscordEventScalarFieldEnumSchema } from './enums/DiscordEventScalarFieldEnum.schema'

export const DiscordEventFindFirstSchema = z.object({
  select: DiscordEventSelectObjectSchema.optional(),
  include: DiscordEventIncludeObjectSchema.optional(),
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
  distinct: z.array(DiscordEventScalarFieldEnumSchema).optional(),
})
