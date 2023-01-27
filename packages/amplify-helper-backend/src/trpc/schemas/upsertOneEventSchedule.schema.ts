import { z } from 'zod'
import { EventScheduleSelectObjectSchema } from './objects/EventScheduleSelect.schema'
import { EventScheduleIncludeObjectSchema } from './objects/EventScheduleInclude.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './objects/EventScheduleWhereUniqueInput.schema'
import { EventScheduleCreateInputObjectSchema } from './objects/EventScheduleCreateInput.schema'
import { EventScheduleUncheckedCreateInputObjectSchema } from './objects/EventScheduleUncheckedCreateInput.schema'
import { EventScheduleUpdateInputObjectSchema } from './objects/EventScheduleUpdateInput.schema'
import { EventScheduleUncheckedUpdateInputObjectSchema } from './objects/EventScheduleUncheckedUpdateInput.schema'

export const EventScheduleUpsertSchema = z.object({
  select: EventScheduleSelectObjectSchema.optional(),
  include: EventScheduleIncludeObjectSchema.optional(),
  where: EventScheduleWhereUniqueInputObjectSchema,
  create: z.union([
    EventScheduleCreateInputObjectSchema,
    EventScheduleUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    EventScheduleUpdateInputObjectSchema,
    EventScheduleUncheckedUpdateInputObjectSchema,
  ]),
})
