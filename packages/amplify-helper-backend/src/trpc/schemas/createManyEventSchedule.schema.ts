import { z } from 'zod'
import { EventScheduleCreateManyInputObjectSchema } from './objects/EventScheduleCreateManyInput.schema'

export const EventScheduleCreateManySchema = z.object({
  data: z.union([
    EventScheduleCreateManyInputObjectSchema,
    z.array(EventScheduleCreateManyInputObjectSchema),
  ]),
})
