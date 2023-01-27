import { z } from 'zod'
import { EventScheduleWhereInputObjectSchema } from './objects/EventScheduleWhereInput.schema'

export const EventScheduleDeleteManySchema = z.object({
  where: EventScheduleWhereInputObjectSchema.optional(),
})
