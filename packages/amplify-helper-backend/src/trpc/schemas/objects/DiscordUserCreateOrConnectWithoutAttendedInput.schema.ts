import { z } from 'zod'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserCreateWithoutAttendedInputObjectSchema } from './DiscordUserCreateWithoutAttendedInput.schema'
import { DiscordUserUncheckedCreateWithoutAttendedInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAttendedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateOrConnectWithoutAttendedInput> = z
  .object({
    where: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiscordUserCreateWithoutAttendedInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedCreateWithoutAttendedInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordUserCreateOrConnectWithoutAttendedInputObjectSchema = Schema
