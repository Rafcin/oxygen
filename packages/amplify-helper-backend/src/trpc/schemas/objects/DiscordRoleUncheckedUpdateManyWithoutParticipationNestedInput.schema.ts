import { z } from 'zod'
import { DiscordRoleCreateWithoutParticipationInputObjectSchema } from './DiscordRoleCreateWithoutParticipationInput.schema'
import { DiscordRoleUncheckedCreateWithoutParticipationInputObjectSchema } from './DiscordRoleUncheckedCreateWithoutParticipationInput.schema'
import { DiscordRoleCreateOrConnectWithoutParticipationInputObjectSchema } from './DiscordRoleCreateOrConnectWithoutParticipationInput.schema'
import { DiscordRoleUpsertWithWhereUniqueWithoutParticipationInputObjectSchema } from './DiscordRoleUpsertWithWhereUniqueWithoutParticipationInput.schema'
import { DiscordRoleWhereUniqueInputObjectSchema } from './DiscordRoleWhereUniqueInput.schema'
import { DiscordRoleUpdateWithWhereUniqueWithoutParticipationInputObjectSchema } from './DiscordRoleUpdateWithWhereUniqueWithoutParticipationInput.schema'
import { DiscordRoleUpdateManyWithWhereWithoutParticipationInputObjectSchema } from './DiscordRoleUpdateManyWithWhereWithoutParticipationInput.schema'
import { DiscordRoleScalarWhereInputObjectSchema } from './DiscordRoleScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUncheckedUpdateManyWithoutParticipationNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              DiscordRoleUpsertWithWhereUniqueWithoutParticipationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordRoleUpsertWithWhereUniqueWithoutParticipationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              DiscordRoleUpdateWithWhereUniqueWithoutParticipationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordRoleUpdateWithWhereUniqueWithoutParticipationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => DiscordRoleUpdateManyWithWhereWithoutParticipationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordRoleUpdateManyWithWhereWithoutParticipationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DiscordRoleScalarWhereInputObjectSchema),
          z.lazy(() => DiscordRoleScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const DiscordRoleUncheckedUpdateManyWithoutParticipationNestedInputObjectSchema =
  Schema
