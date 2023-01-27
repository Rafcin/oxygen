import { z } from 'zod'
import { ParticipationCreateWithoutParticipantRolesInputObjectSchema } from './ParticipationCreateWithoutParticipantRolesInput.schema'
import { ParticipationUncheckedCreateWithoutParticipantRolesInputObjectSchema } from './ParticipationUncheckedCreateWithoutParticipantRolesInput.schema'
import { ParticipationCreateOrConnectWithoutParticipantRolesInputObjectSchema } from './ParticipationCreateOrConnectWithoutParticipantRolesInput.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInput> =
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
      connect: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInputObjectSchema =
  Schema
