import { z } from 'zod'
import { DiscordUserCreateWithoutParticipationsInputObjectSchema } from './DiscordUserCreateWithoutParticipationsInput.schema'
import { DiscordUserUncheckedCreateWithoutParticipationsInputObjectSchema } from './DiscordUserUncheckedCreateWithoutParticipationsInput.schema'
import { DiscordUserCreateOrConnectWithoutParticipationsInputObjectSchema } from './DiscordUserCreateOrConnectWithoutParticipationsInput.schema'
import { DiscordUserUpsertWithoutParticipationsInputObjectSchema } from './DiscordUserUpsertWithoutParticipationsInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserUpdateWithoutParticipationsInputObjectSchema } from './DiscordUserUpdateWithoutParticipationsInput.schema'
import { DiscordUserUncheckedUpdateWithoutParticipationsInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutParticipationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpdateOneRequiredWithoutParticipationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordUserCreateWithoutParticipationsInputObjectSchema),
          z.lazy(
            () => DiscordUserUncheckedCreateWithoutParticipationsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DiscordUserCreateOrConnectWithoutParticipationsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => DiscordUserUpsertWithoutParticipationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiscordUserUpdateWithoutParticipationsInputObjectSchema),
          z.lazy(
            () => DiscordUserUncheckedUpdateWithoutParticipationsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const DiscordUserUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema =
  Schema
