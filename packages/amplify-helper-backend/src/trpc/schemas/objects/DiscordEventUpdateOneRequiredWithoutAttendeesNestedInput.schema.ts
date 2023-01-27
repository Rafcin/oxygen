import { z } from 'zod'
import { DiscordEventCreateWithoutAttendeesInputObjectSchema } from './DiscordEventCreateWithoutAttendeesInput.schema'
import { DiscordEventUncheckedCreateWithoutAttendeesInputObjectSchema } from './DiscordEventUncheckedCreateWithoutAttendeesInput.schema'
import { DiscordEventCreateOrConnectWithoutAttendeesInputObjectSchema } from './DiscordEventCreateOrConnectWithoutAttendeesInput.schema'
import { DiscordEventUpsertWithoutAttendeesInputObjectSchema } from './DiscordEventUpsertWithoutAttendeesInput.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'
import { DiscordEventUpdateWithoutAttendeesInputObjectSchema } from './DiscordEventUpdateWithoutAttendeesInput.schema'
import { DiscordEventUncheckedUpdateWithoutAttendeesInputObjectSchema } from './DiscordEventUncheckedUpdateWithoutAttendeesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventUpdateOneRequiredWithoutAttendeesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordEventCreateWithoutAttendeesInputObjectSchema),
          z.lazy(() => DiscordEventUncheckedCreateWithoutAttendeesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DiscordEventCreateOrConnectWithoutAttendeesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => DiscordEventUpsertWithoutAttendeesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiscordEventUpdateWithoutAttendeesInputObjectSchema),
          z.lazy(() => DiscordEventUncheckedUpdateWithoutAttendeesInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const DiscordEventUpdateOneRequiredWithoutAttendeesNestedInputObjectSchema =
  Schema
