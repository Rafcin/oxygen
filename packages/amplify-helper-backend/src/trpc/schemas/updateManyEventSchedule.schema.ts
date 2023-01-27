import { z } from 'zod'
import { EventScheduleUpdateManyMutationInputObjectSchema } from './objects/EventScheduleUpdateManyMutationInput.schema'
import { EventScheduleWhereInputObjectSchema } from './objects/EventScheduleWhereInput.schema'

export const EventScheduleUpdateManySchema = z.object({
  data: EventScheduleUpdateManyMutationInputObjectSchema,
  where: EventScheduleWhereInputObjectSchema.optional(),
})
