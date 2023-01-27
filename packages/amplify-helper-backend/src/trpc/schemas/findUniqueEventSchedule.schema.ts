import { z } from 'zod'
import { EventScheduleSelectObjectSchema } from './objects/EventScheduleSelect.schema'
import { EventScheduleIncludeObjectSchema } from './objects/EventScheduleInclude.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './objects/EventScheduleWhereUniqueInput.schema'

export const EventScheduleFindUniqueSchema = z.object({
  select: EventScheduleSelectObjectSchema.optional(),
  include: EventScheduleIncludeObjectSchema.optional(),
  where: EventScheduleWhereUniqueInputObjectSchema,
})
