import { z } from 'zod'
import { DiscordUserUpdateWithoutAttendedInputObjectSchema } from './DiscordUserUpdateWithoutAttendedInput.schema'
import { DiscordUserUncheckedUpdateWithoutAttendedInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutAttendedInput.schema'
import { DiscordUserCreateWithoutAttendedInputObjectSchema } from './DiscordUserCreateWithoutAttendedInput.schema'
import { DiscordUserUncheckedCreateWithoutAttendedInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAttendedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpsertWithoutAttendedInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiscordUserUpdateWithoutAttendedInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedUpdateWithoutAttendedInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiscordUserCreateWithoutAttendedInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedCreateWithoutAttendedInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordUserUpsertWithoutAttendedInputObjectSchema = Schema
