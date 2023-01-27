import { z } from 'zod'
import { DiscordEventCreateNestedOneWithoutAttendeesInputObjectSchema } from './DiscordEventCreateNestedOneWithoutAttendeesInput.schema'
import { DiscordUserCreateNestedOneWithoutAttendedInputObjectSchema } from './DiscordUserCreateNestedOneWithoutAttendedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCreateInput> = z
  .object({
    event: z.lazy(
      () => DiscordEventCreateNestedOneWithoutAttendeesInputObjectSchema
    ),
    member: z.lazy(() => DiscordUserCreateNestedOneWithoutAttendedInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    time: z.number(),
  })
  .strict()

export const DiscordEventAttendeeCreateInputObjectSchema = Schema
