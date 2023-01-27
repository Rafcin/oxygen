import { z } from 'zod'
import { DiscordUserCreateWithoutAttendedInputObjectSchema } from './DiscordUserCreateWithoutAttendedInput.schema'
import { DiscordUserUncheckedCreateWithoutAttendedInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAttendedInput.schema'
import { DiscordUserCreateOrConnectWithoutAttendedInputObjectSchema } from './DiscordUserCreateOrConnectWithoutAttendedInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateNestedOneWithoutAttendedInput> = z
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
    connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const DiscordUserCreateNestedOneWithoutAttendedInputObjectSchema = Schema
