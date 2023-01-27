import { z } from 'zod'
import { EventScheduleWhereInputObjectSchema } from './objects/EventScheduleWhereInput.schema'
import { EventScheduleOrderByWithAggregationInputObjectSchema } from './objects/EventScheduleOrderByWithAggregationInput.schema'
import { EventScheduleScalarWhereWithAggregatesInputObjectSchema } from './objects/EventScheduleScalarWhereWithAggregatesInput.schema'
import { EventScheduleScalarFieldEnumSchema } from './enums/EventScheduleScalarFieldEnum.schema'

export const EventScheduleGroupBySchema = z.object({
  where: EventScheduleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EventScheduleOrderByWithAggregationInputObjectSchema,
      EventScheduleOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: EventScheduleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EventScheduleScalarFieldEnumSchema),
})
