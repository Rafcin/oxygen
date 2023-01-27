import { z } from 'zod'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserCreateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserCreateWithoutCreatedSchedulesInput.schema'
import { DiscordUserUncheckedCreateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserUncheckedCreateWithoutCreatedSchedulesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateOrConnectWithoutCreatedSchedulesInput> =
  z
    .object({
      where: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiscordUserCreateWithoutCreatedSchedulesInputObjectSchema),
        z.lazy(
          () => DiscordUserUncheckedCreateWithoutCreatedSchedulesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordUserCreateOrConnectWithoutCreatedSchedulesInputObjectSchema =
  Schema
