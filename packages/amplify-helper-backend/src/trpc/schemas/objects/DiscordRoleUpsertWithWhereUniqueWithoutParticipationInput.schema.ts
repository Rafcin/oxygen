import { z } from 'zod'
import { DiscordRoleWhereUniqueInputObjectSchema } from './DiscordRoleWhereUniqueInput.schema'
import { DiscordRoleUpdateWithoutParticipationInputObjectSchema } from './DiscordRoleUpdateWithoutParticipationInput.schema'
import { DiscordRoleUncheckedUpdateWithoutParticipationInputObjectSchema } from './DiscordRoleUncheckedUpdateWithoutParticipationInput.schema'
import { DiscordRoleCreateWithoutParticipationInputObjectSchema } from './DiscordRoleCreateWithoutParticipationInput.schema'
import { DiscordRoleUncheckedCreateWithoutParticipationInputObjectSchema } from './DiscordRoleUncheckedCreateWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUpsertWithWhereUniqueWithoutParticipationInput> =
  z
    .object({
      where: z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiscordRoleUpdateWithoutParticipationInputObjectSchema),
        z.lazy(
          () => DiscordRoleUncheckedUpdateWithoutParticipationInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => DiscordRoleCreateWithoutParticipationInputObjectSchema),
        z.lazy(
          () => DiscordRoleUncheckedCreateWithoutParticipationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordRoleUpsertWithWhereUniqueWithoutParticipationInputObjectSchema =
  Schema
