import { z } from 'zod'
import { EventScheduleSelectObjectSchema } from './objects/EventScheduleSelect.schema'
import { EventScheduleIncludeObjectSchema } from './objects/EventScheduleInclude.schema'
import { EventScheduleOrderByWithRelationInputObjectSchema } from './objects/EventScheduleOrderByWithRelationInput.schema'
import { EventScheduleWhereInputObjectSchema } from './objects/EventScheduleWhereInput.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './objects/EventScheduleWhereUniqueInput.schema'
import { EventScheduleScalarFieldEnumSchema } from './enums/EventScheduleScalarFieldEnum.schema'

export const EventScheduleFindManySchema = z.object({
  select: z.lazy(() => EventScheduleSelectObjectSchema.optional()),
  include: z.lazy(() => EventScheduleIncludeObjectSchema.optional()),
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
  distinct: z.array(EventScheduleScalarFieldEnumSchema).optional(),
})
