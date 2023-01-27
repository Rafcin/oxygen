import { z } from 'zod'
import { DiscordUserCreateWithoutCreatedEventsInputObjectSchema } from './DiscordUserCreateWithoutCreatedEventsInput.schema'
import { DiscordUserUncheckedCreateWithoutCreatedEventsInputObjectSchema } from './DiscordUserUncheckedCreateWithoutCreatedEventsInput.schema'
import { DiscordUserCreateOrConnectWithoutCreatedEventsInputObjectSchema } from './DiscordUserCreateOrConnectWithoutCreatedEventsInput.schema'
import { DiscordUserUpsertWithoutCreatedEventsInputObjectSchema } from './DiscordUserUpsertWithoutCreatedEventsInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserUpdateWithoutCreatedEventsInputObjectSchema } from './DiscordUserUpdateWithoutCreatedEventsInput.schema'
import { DiscordUserUncheckedUpdateWithoutCreatedEventsInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutCreatedEventsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpdateOneRequiredWithoutCreatedEventsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordUserCreateWithoutCreatedEventsInputObjectSchema),
          z.lazy(
            () => DiscordUserUncheckedCreateWithoutCreatedEventsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DiscordUserCreateOrConnectWithoutCreatedEventsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => DiscordUserUpsertWithoutCreatedEventsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiscordUserUpdateWithoutCreatedEventsInputObjectSchema),
          z.lazy(
            () => DiscordUserUncheckedUpdateWithoutCreatedEventsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const DiscordUserUpdateOneRequiredWithoutCreatedEventsNestedInputObjectSchema =
  Schema
