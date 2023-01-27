import { z } from 'zod'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationCreateWithoutParticipantRolesInputObjectSchema } from './ParticipationCreateWithoutParticipantRolesInput.schema'
import { ParticipationUncheckedCreateWithoutParticipantRolesInputObjectSchema } from './ParticipationUncheckedCreateWithoutParticipantRolesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateOrConnectWithoutParticipantRolesInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutParticipantRolesInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedCreateWithoutParticipantRolesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ParticipationCreateOrConnectWithoutParticipantRolesInputObjectSchema =
  Schema
