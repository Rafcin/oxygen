import { z } from 'zod'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserCreateWithoutParticipationsInputObjectSchema } from './DiscordUserCreateWithoutParticipationsInput.schema'
import { DiscordUserUncheckedCreateWithoutParticipationsInputObjectSchema } from './DiscordUserUncheckedCreateWithoutParticipationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateOrConnectWithoutParticipationsInput> =
  z
    .object({
      where: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiscordUserCreateWithoutParticipationsInputObjectSchema),
        z.lazy(
          () => DiscordUserUncheckedCreateWithoutParticipationsInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordUserCreateOrConnectWithoutParticipationsInputObjectSchema =
  Schema
