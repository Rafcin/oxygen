import { z } from 'zod'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationUpdateWithoutParticipantRolesInputObjectSchema } from './ParticipationUpdateWithoutParticipantRolesInput.schema'
import { ParticipationUncheckedUpdateWithoutParticipantRolesInputObjectSchema } from './ParticipationUncheckedUpdateWithoutParticipantRolesInput.schema'
import { ParticipationCreateWithoutParticipantRolesInputObjectSchema } from './ParticipationCreateWithoutParticipantRolesInput.schema'
import { ParticipationUncheckedCreateWithoutParticipantRolesInputObjectSchema } from './ParticipationUncheckedCreateWithoutParticipantRolesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpsertWithWhereUniqueWithoutParticipantRolesInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ParticipationUpdateWithoutParticipantRolesInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedUpdateWithoutParticipantRolesInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutParticipantRolesInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedCreateWithoutParticipantRolesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ParticipationUpsertWithWhereUniqueWithoutParticipantRolesInputObjectSchema =
  Schema
