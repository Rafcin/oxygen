import { z } from 'zod'
import { ParticipationCreateWithoutParticipantRolesInputObjectSchema } from './ParticipationCreateWithoutParticipantRolesInput.schema'
import { ParticipationUncheckedCreateWithoutParticipantRolesInputObjectSchema } from './ParticipationUncheckedCreateWithoutParticipantRolesInput.schema'
import { ParticipationCreateOrConnectWithoutParticipantRolesInputObjectSchema } from './ParticipationCreateOrConnectWithoutParticipantRolesInput.schema'
import { ParticipationUpsertWithWhereUniqueWithoutParticipantRolesInputObjectSchema } from './ParticipationUpsertWithWhereUniqueWithoutParticipantRolesInput.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationUpdateWithWhereUniqueWithoutParticipantRolesInputObjectSchema } from './ParticipationUpdateWithWhereUniqueWithoutParticipantRolesInput.schema'
import { ParticipationUpdateManyWithWhereWithoutParticipantRolesInputObjectSchema } from './ParticipationUpdateManyWithWhereWithoutParticipantRolesInput.schema'
import { ParticipationScalarWhereInputObjectSchema } from './ParticipationScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUncheckedUpdateManyWithoutParticipantRolesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ParticipationCreateWithoutParticipantRolesInputObjectSchema),
          z
            .lazy(() => ParticipationCreateWithoutParticipantRolesInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              ParticipationUncheckedCreateWithoutParticipantRolesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ParticipationUncheckedCreateWithoutParticipantRolesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ParticipationCreateOrConnectWithoutParticipantRolesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ParticipationCreateOrConnectWithoutParticipantRolesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ParticipationUpsertWithWhereUniqueWithoutParticipantRolesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ParticipationUpsertWithWhereUniqueWithoutParticipantRolesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ParticipationUpdateWithWhereUniqueWithoutParticipantRolesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ParticipationUpdateWithWhereUniqueWithoutParticipantRolesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ParticipationUpdateManyWithWhereWithoutParticipantRolesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ParticipationUpdateManyWithWhereWithoutParticipantRolesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ParticipationScalarWhereInputObjectSchema),
          z.lazy(() => ParticipationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const ParticipationUncheckedUpdateManyWithoutParticipantRolesNestedInputObjectSchema =
  Schema
