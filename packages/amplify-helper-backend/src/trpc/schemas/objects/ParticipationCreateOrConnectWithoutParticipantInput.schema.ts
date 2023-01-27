import { z } from 'zod'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationCreateWithoutParticipantInputObjectSchema } from './ParticipationCreateWithoutParticipantInput.schema'
import { ParticipationUncheckedCreateWithoutParticipantInputObjectSchema } from './ParticipationUncheckedCreateWithoutParticipantInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateOrConnectWithoutParticipantInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutParticipantInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedCreateWithoutParticipantInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ParticipationCreateOrConnectWithoutParticipantInputObjectSchema = Schema
