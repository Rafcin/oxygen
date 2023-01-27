import { z } from 'zod'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationUpdateWithoutParticipantRolesInputObjectSchema } from './ParticipationUpdateWithoutParticipantRolesInput.schema'
import { ParticipationUncheckedUpdateWithoutParticipantRolesInputObjectSchema } from './ParticipationUncheckedUpdateWithoutParticipantRolesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateWithWhereUniqueWithoutParticipantRolesInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ParticipationUpdateWithoutParticipantRolesInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedUpdateWithoutParticipantRolesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ParticipationUpdateWithWhereUniqueWithoutParticipantRolesInputObjectSchema =
  Schema
