import { z } from 'zod'
import { DiscordRoleWhereUniqueInputObjectSchema } from './DiscordRoleWhereUniqueInput.schema'
import { DiscordRoleCreateWithoutParticipationInputObjectSchema } from './DiscordRoleCreateWithoutParticipationInput.schema'
import { DiscordRoleUncheckedCreateWithoutParticipationInputObjectSchema } from './DiscordRoleUncheckedCreateWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleCreateOrConnectWithoutParticipationInput> =
  z
    .object({
      where: z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiscordRoleCreateWithoutParticipationInputObjectSchema),
        z.lazy(
          () => DiscordRoleUncheckedCreateWithoutParticipationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordRoleCreateOrConnectWithoutParticipationInputObjectSchema = Schema
