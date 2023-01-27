import { z } from 'zod'
import { EventScheduleOrderByWithRelationInputObjectSchema } from './objects/EventScheduleOrderByWithRelationInput.schema'
import { EventScheduleWhereInputObjectSchema } from './objects/EventScheduleWhereInput.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './objects/EventScheduleWhereUniqueInput.schema'
import { EventScheduleCountAggregateInputObjectSchema } from './objects/EventScheduleCountAggregateInput.schema'
import { EventScheduleMinAggregateInputObjectSchema } from './objects/EventScheduleMinAggregateInput.schema'
import { EventScheduleMaxAggregateInputObjectSchema } from './objects/EventScheduleMaxAggregateInput.schema'

export const EventScheduleAggregateSchema = z.object({
  orderBy: z
    .union([
      EventScheduleOrderByWithRelationInputObjectSchema,
      EventScheduleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EventScheduleWhereInputObjectSchema.optional(),
  cursor: EventScheduleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), EventScheduleCountAggregateInputObjectSchema])
    .optional(),
  _min: EventScheduleMinAggregateInputObjectSchema.optional(),
  _max: EventScheduleMaxAggregateInputObjectSchema.optional(),
})
