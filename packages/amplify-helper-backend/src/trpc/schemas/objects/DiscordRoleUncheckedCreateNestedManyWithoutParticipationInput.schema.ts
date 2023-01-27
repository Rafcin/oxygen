import { z } from 'zod'
import { DiscordRoleCreateWithoutParticipationInputObjectSchema } from './DiscordRoleCreateWithoutParticipationInput.schema'
import { DiscordRoleUncheckedCreateWithoutParticipationInputObjectSchema } from './DiscordRoleUncheckedCreateWithoutParticipationInput.schema'
import { DiscordRoleCreateOrConnectWithoutParticipationInputObjectSchema } from './DiscordRoleCreateOrConnectWithoutParticipationInput.schema'
import { DiscordRoleWhereUniqueInputObjectSchema } from './DiscordRoleWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUncheckedCreateNestedManyWithoutParticipationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordRoleCreateWithoutParticipationInputObjectSchema),
          z
            .lazy(() => DiscordRoleCreateWithoutParticipationInputObjectSchema)
            .array(),
          z.lazy(
            () => DiscordRoleUncheckedCreateWithoutParticipationInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordRoleUncheckedCreateWithoutParticipationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiscordRoleCreateOrConnectWithoutParticipationInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordRoleCreateOrConnectWithoutParticipationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const DiscordRoleUncheckedCreateNestedManyWithoutParticipationInputObjectSchema =
  Schema
