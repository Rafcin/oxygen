import { z } from 'zod'
import { DiscordEventAttendeeWhereInputObjectSchema } from './objects/DiscordEventAttendeeWhereInput.schema'
import { DiscordEventAttendeeOrderByWithAggregationInputObjectSchema } from './objects/DiscordEventAttendeeOrderByWithAggregationInput.schema'
import { DiscordEventAttendeeScalarWhereWithAggregatesInputObjectSchema } from './objects/DiscordEventAttendeeScalarWhereWithAggregatesInput.schema'
import { DiscordEventAttendeeScalarFieldEnumSchema } from './enums/DiscordEventAttendeeScalarFieldEnum.schema'

export const DiscordEventAttendeeGroupBySchema = z.object({
  where: DiscordEventAttendeeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiscordEventAttendeeOrderByWithAggregationInputObjectSchema,
      DiscordEventAttendeeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DiscordEventAttendeeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiscordEventAttendeeScalarFieldEnumSchema),
})
