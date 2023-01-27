import { z } from 'zod'
import { DiscordUserCreateWithoutAttendedInputObjectSchema } from './DiscordUserCreateWithoutAttendedInput.schema'
import { DiscordUserUncheckedCreateWithoutAttendedInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAttendedInput.schema'
import { DiscordUserCreateOrConnectWithoutAttendedInputObjectSchema } from './DiscordUserCreateOrConnectWithoutAttendedInput.schema'
import { DiscordUserUpsertWithoutAttendedInputObjectSchema } from './DiscordUserUpsertWithoutAttendedInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserUpdateWithoutAttendedInputObjectSchema } from './DiscordUserUpdateWithoutAttendedInput.schema'
import { DiscordUserUncheckedUpdateWithoutAttendedInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutAttendedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpdateOneRequiredWithoutAttendedNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordUserCreateWithoutAttendedInputObjectSchema),
          z.lazy(() => DiscordUserUncheckedCreateWithoutAttendedInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DiscordUserCreateOrConnectWithoutAttendedInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => DiscordUserUpsertWithoutAttendedInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiscordUserUpdateWithoutAttendedInputObjectSchema),
          z.lazy(() => DiscordUserUncheckedUpdateWithoutAttendedInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const DiscordUserUpdateOneRequiredWithoutAttendedNestedInputObjectSchema =
  Schema
