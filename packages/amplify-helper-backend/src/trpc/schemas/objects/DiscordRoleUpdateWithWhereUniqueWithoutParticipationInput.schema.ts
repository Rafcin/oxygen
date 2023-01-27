import { z } from 'zod'
import { DiscordRoleWhereUniqueInputObjectSchema } from './DiscordRoleWhereUniqueInput.schema'
import { DiscordRoleUpdateWithoutParticipationInputObjectSchema } from './DiscordRoleUpdateWithoutParticipationInput.schema'
import { DiscordRoleUncheckedUpdateWithoutParticipationInputObjectSchema } from './DiscordRoleUncheckedUpdateWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUpdateWithWhereUniqueWithoutParticipationInput> =
  z
    .object({
      where: z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiscordRoleUpdateWithoutParticipationInputObjectSchema),
        z.lazy(
          () => DiscordRoleUncheckedUpdateWithoutParticipationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordRoleUpdateWithWhereUniqueWithoutParticipationInputObjectSchema =
  Schema
