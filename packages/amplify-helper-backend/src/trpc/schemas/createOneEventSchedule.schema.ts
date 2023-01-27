import { z } from 'zod'
import { EventScheduleSelectObjectSchema } from './objects/EventScheduleSelect.schema'
import { EventScheduleIncludeObjectSchema } from './objects/EventScheduleInclude.schema'
import { EventScheduleCreateInputObjectSchema } from './objects/EventScheduleCreateInput.schema'
import { EventScheduleUncheckedCreateInputObjectSchema } from './objects/EventScheduleUncheckedCreateInput.schema'

export const EventScheduleCreateOneSchema = z.object({
  select: EventScheduleSelectObjectSchema.optional(),
  include: EventScheduleIncludeObjectSchema.optional(),
  data: z.union([
    EventScheduleCreateInputObjectSchema,
    EventScheduleUncheckedCreateInputObjectSchema,
  ]),
})
