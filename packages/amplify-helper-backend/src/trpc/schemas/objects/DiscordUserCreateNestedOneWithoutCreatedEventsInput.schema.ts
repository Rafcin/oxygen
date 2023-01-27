import { z } from 'zod'
import { DiscordUserCreateWithoutCreatedEventsInputObjectSchema } from './DiscordUserCreateWithoutCreatedEventsInput.schema'
import { DiscordUserUncheckedCreateWithoutCreatedEventsInputObjectSchema } from './DiscordUserUncheckedCreateWithoutCreatedEventsInput.schema'
import { DiscordUserCreateOrConnectWithoutCreatedEventsInputObjectSchema } from './DiscordUserCreateOrConnectWithoutCreatedEventsInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateNestedOneWithoutCreatedEventsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordUserCreateWithoutCreatedEventsInputObjectSchema),
          z.lazy(
            () => DiscordUserUncheckedCreateWithoutCreatedEventsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DiscordUserCreateOrConnectWithoutCreatedEventsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const DiscordUserCreateNestedOneWithoutCreatedEventsInputObjectSchema = Schema
