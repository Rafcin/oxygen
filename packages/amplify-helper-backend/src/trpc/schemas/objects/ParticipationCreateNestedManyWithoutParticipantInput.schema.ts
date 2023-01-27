import { z } from 'zod'
import { ParticipationCreateWithoutParticipantInputObjectSchema } from './ParticipationCreateWithoutParticipantInput.schema'
import { ParticipationUncheckedCreateWithoutParticipantInputObjectSchema } from './ParticipationUncheckedCreateWithoutParticipantInput.schema'
import { ParticipationCreateOrConnectWithoutParticipantInputObjectSchema } from './ParticipationCreateOrConnectWithoutParticipantInput.schema'
import { ParticipationCreateManyParticipantInputEnvelopeObjectSchema } from './ParticipationCreateManyParticipantInputEnvelope.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateNestedManyWithoutParticipantInput> =
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
      createMany: z
        .lazy(() => ParticipationCreateManyParticipantInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const ParticipationCreateNestedManyWithoutParticipantInputObjectSchema =
  Schema
