import { z } from 'zod'
import { DiscordUserCreateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserCreateWithoutCreatedSchedulesInput.schema'
import { DiscordUserUncheckedCreateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserUncheckedCreateWithoutCreatedSchedulesInput.schema'
import { DiscordUserCreateOrConnectWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserCreateOrConnectWithoutCreatedSchedulesInput.schema'
import { DiscordUserUpsertWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserUpsertWithoutCreatedSchedulesInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserUpdateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserUpdateWithoutCreatedSchedulesInput.schema'
import { DiscordUserUncheckedUpdateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutCreatedSchedulesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpdateOneRequiredWithoutCreatedSchedulesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordUserCreateWithoutCreatedSchedulesInputObjectSchema),
          z.lazy(
            () => DiscordUserUncheckedCreateWithoutCreatedSchedulesInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => DiscordUserCreateOrConnectWithoutCreatedSchedulesInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(() => DiscordUserUpsertWithoutCreatedSchedulesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiscordUserUpdateWithoutCreatedSchedulesInputObjectSchema),
          z.lazy(
            () => DiscordUserUncheckedUpdateWithoutCreatedSchedulesInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const DiscordUserUpdateOneRequiredWithoutCreatedSchedulesNestedInputObjectSchema =
  Schema
