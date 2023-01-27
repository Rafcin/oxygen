import { z } from 'zod'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserCreateWithoutCreatedEventsInputObjectSchema } from './DiscordUserCreateWithoutCreatedEventsInput.schema'
import { DiscordUserUncheckedCreateWithoutCreatedEventsInputObjectSchema } from './DiscordUserUncheckedCreateWithoutCreatedEventsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateOrConnectWithoutCreatedEventsInput> =
  z
    .object({
      where: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiscordUserCreateWithoutCreatedEventsInputObjectSchema),
        z.lazy(
          () => DiscordUserUncheckedCreateWithoutCreatedEventsInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordUserCreateOrConnectWithoutCreatedEventsInputObjectSchema = Schema
