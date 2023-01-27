import { z } from 'zod'
import { ParticipationCreateWithoutParticipantInputObjectSchema } from './ParticipationCreateWithoutParticipantInput.schema'
import { ParticipationUncheckedCreateWithoutParticipantInputObjectSchema } from './ParticipationUncheckedCreateWithoutParticipantInput.schema'
import { ParticipationCreateOrConnectWithoutParticipantInputObjectSchema } from './ParticipationCreateOrConnectWithoutParticipantInput.schema'
import { ParticipationUpsertWithWhereUniqueWithoutParticipantInputObjectSchema } from './ParticipationUpsertWithWhereUniqueWithoutParticipantInput.schema'
import { ParticipationCreateManyParticipantInputEnvelopeObjectSchema } from './ParticipationCreateManyParticipantInputEnvelope.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationUpdateWithWhereUniqueWithoutParticipantInputObjectSchema } from './ParticipationUpdateWithWhereUniqueWithoutParticipantInput.schema'
import { ParticipationUpdateManyWithWhereWithoutParticipantInputObjectSchema } from './ParticipationUpdateManyWithWhereWithoutParticipantInput.schema'
import { ParticipationScalarWhereInputObjectSchema } from './ParticipationScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateManyWithoutParticipantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ParticipationCreateWithoutParticipantInputObjectSchema),
          z
            .lazy(() => ParticipationCreateWithoutParticipantInputObjectSchema)
            .array(),
          z.lazy(
            () => ParticipationUncheckedCreateWithoutParticipantInputObjectSchema
          ),
          z
            .lazy(
              () => ParticipationUncheckedCreateWithoutParticipantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ParticipationCreateOrConnectWithoutParticipantInputObjectSchema
          ),
          z
            .lazy(
              () => ParticipationCreateOrConnectWithoutParticipantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ParticipationUpsertWithWhereUniqueWithoutParticipantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ParticipationUpsertWithWhereUniqueWithoutParticipantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ParticipationCreateManyParticipantInputEnvelopeObjectSchema)
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
              ParticipationUpdateWithWhereUniqueWithoutParticipantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ParticipationUpdateWithWhereUniqueWithoutParticipantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ParticipationUpdateManyWithWhereWithoutParticipantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ParticipationUpdateManyWithWhereWithoutParticipantInputObjectSchema
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

export const ParticipationUpdateManyWithoutParticipantNestedInputObjectSchema =
  Schema
