import { z } from 'zod'
import { DiscordEventAttendeeOrderByWithRelationInputObjectSchema } from './objects/DiscordEventAttendeeOrderByWithRelationInput.schema'
import { DiscordEventAttendeeWhereInputObjectSchema } from './objects/DiscordEventAttendeeWhereInput.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './objects/DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeCountAggregateInputObjectSchema } from './objects/DiscordEventAttendeeCountAggregateInput.schema'
import { DiscordEventAttendeeMinAggregateInputObjectSchema } from './objects/DiscordEventAttendeeMinAggregateInput.schema'
import { DiscordEventAttendeeMaxAggregateInputObjectSchema } from './objects/DiscordEventAttendeeMaxAggregateInput.schema'
import { DiscordEventAttendeeAvgAggregateInputObjectSchema } from './objects/DiscordEventAttendeeAvgAggregateInput.schema'
import { DiscordEventAttendeeSumAggregateInputObjectSchema } from './objects/DiscordEventAttendeeSumAggregateInput.schema'

export const DiscordEventAttendeeAggregateSchema = z.object({
  orderBy: z
    .union([
      DiscordEventAttendeeOrderByWithRelationInputObjectSchema,
      DiscordEventAttendeeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DiscordEventAttendeeWhereInputObjectSchema.optional(),
  cursor: DiscordEventAttendeeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DiscordEventAttendeeCountAggregateInputObjectSchema])
    .optional(),
  _min: DiscordEventAttendeeMinAggregateInputObjectSchema.optional(),
  _max: DiscordEventAttendeeMaxAggregateInputObjectSchema.optional(),
  _avg: DiscordEventAttendeeAvgAggregateInputObjectSchema.optional(),
  _sum: DiscordEventAttendeeSumAggregateInputObjectSchema.optional(),
})
