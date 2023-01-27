import { z } from 'zod'
import { EventScheduleSelectObjectSchema } from './objects/EventScheduleSelect.schema'
import { EventScheduleIncludeObjectSchema } from './objects/EventScheduleInclude.schema'
import { EventScheduleUpdateInputObjectSchema } from './objects/EventScheduleUpdateInput.schema'
import { EventScheduleUncheckedUpdateInputObjectSchema } from './objects/EventScheduleUncheckedUpdateInput.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './objects/EventScheduleWhereUniqueInput.schema'

export const EventScheduleUpdateOneSchema = z.object({
  select: EventScheduleSelectObjectSchema.optional(),
  include: EventScheduleIncludeObjectSchema.optional(),
  data: z.union([
    EventScheduleUpdateInputObjectSchema,
    EventScheduleUncheckedUpdateInputObjectSchema,
  ]),
  where: EventScheduleWhereUniqueInputObjectSchema,
})
