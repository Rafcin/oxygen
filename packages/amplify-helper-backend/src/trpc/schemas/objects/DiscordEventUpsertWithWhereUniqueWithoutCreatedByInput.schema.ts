import { z } from 'zod'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'
import { DiscordEventUpdateWithoutCreatedByInputObjectSchema } from './DiscordEventUpdateWithoutCreatedByInput.schema'
import { DiscordEventUncheckedUpdateWithoutCreatedByInputObjectSchema } from './DiscordEventUncheckedUpdateWithoutCreatedByInput.schema'
import { DiscordEventCreateWithoutCreatedByInputObjectSchema } from './DiscordEventCreateWithoutCreatedByInput.schema'
import { DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './DiscordEventUncheckedCreateWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventUpsertWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiscordEventUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(() => DiscordEventUncheckedUpdateWithoutCreatedByInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DiscordEventCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema),
      ]),
    })
    .strict()

export const DiscordEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema
