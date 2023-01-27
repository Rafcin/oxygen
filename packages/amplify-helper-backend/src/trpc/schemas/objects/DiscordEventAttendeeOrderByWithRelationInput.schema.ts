import { z } from 'zod'
import { DiscordEventOrderByWithRelationInputObjectSchema } from './DiscordEventOrderByWithRelationInput.schema'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DiscordUserOrderByWithRelationInputObjectSchema } from './DiscordUserOrderByWithRelationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeOrderByWithRelationInput> = z
  .object({
    event: z.lazy(() => DiscordEventOrderByWithRelationInputObjectSchema).optional(),
    eventId: z.lazy(() => SortOrderSchema).optional(),
    member: z.lazy(() => DiscordUserOrderByWithRelationInputObjectSchema).optional(),
    memberId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    time: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const DiscordEventAttendeeOrderByWithRelationInputObjectSchema = Schema
