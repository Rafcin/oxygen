import { z } from 'zod'
import { DiscordUserUpdateWithoutParticipationsInputObjectSchema } from './DiscordUserUpdateWithoutParticipationsInput.schema'
import { DiscordUserUncheckedUpdateWithoutParticipationsInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutParticipationsInput.schema'
import { DiscordUserCreateWithoutParticipationsInputObjectSchema } from './DiscordUserCreateWithoutParticipationsInput.schema'
import { DiscordUserUncheckedCreateWithoutParticipationsInputObjectSchema } from './DiscordUserUncheckedCreateWithoutParticipationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpsertWithoutParticipationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiscordUserUpdateWithoutParticipationsInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedUpdateWithoutParticipationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiscordUserCreateWithoutParticipationsInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedCreateWithoutParticipationsInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordUserUpsertWithoutParticipationsInputObjectSchema = Schema
