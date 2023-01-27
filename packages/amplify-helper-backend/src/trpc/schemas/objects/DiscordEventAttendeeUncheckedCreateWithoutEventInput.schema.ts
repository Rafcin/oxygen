import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUncheckedCreateWithoutEventInput> =
  z
    .object({
      memberId: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      time: z.number(),
    })
    .strict()

export const DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema =
  Schema
