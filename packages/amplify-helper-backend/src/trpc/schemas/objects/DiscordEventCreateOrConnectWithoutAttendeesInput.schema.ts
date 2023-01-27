import { z } from 'zod'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'
import { DiscordEventCreateWithoutAttendeesInputObjectSchema } from './DiscordEventCreateWithoutAttendeesInput.schema'
import { DiscordEventUncheckedCreateWithoutAttendeesInputObjectSchema } from './DiscordEventUncheckedCreateWithoutAttendeesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventCreateOrConnectWithoutAttendeesInput> = z
  .object({
    where: z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiscordEventCreateWithoutAttendeesInputObjectSchema),
      z.lazy(() => DiscordEventUncheckedCreateWithoutAttendeesInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordEventCreateOrConnectWithoutAttendeesInputObjectSchema = Schema
