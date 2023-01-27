import { z } from 'zod'
import { EventScheduleScalarWhereInputObjectSchema } from './EventScheduleScalarWhereInput.schema'
import { EventScheduleUpdateManyMutationInputObjectSchema } from './EventScheduleUpdateManyMutationInput.schema'
import { EventScheduleUncheckedUpdateManyWithoutEventScheduleInputObjectSchema } from './EventScheduleUncheckedUpdateManyWithoutEventScheduleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUpdateManyWithWhereWithoutGuildInput> = z
  .object({
    where: z.lazy(() => EventScheduleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => EventScheduleUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => EventScheduleUncheckedUpdateManyWithoutEventScheduleInputObjectSchema
      ),
    ]),
  })
  .strict()

export const EventScheduleUpdateManyWithWhereWithoutGuildInputObjectSchema = Schema
