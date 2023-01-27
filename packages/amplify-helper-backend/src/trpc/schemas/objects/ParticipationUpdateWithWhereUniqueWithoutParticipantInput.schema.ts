import { z } from 'zod'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationUpdateWithoutParticipantInputObjectSchema } from './ParticipationUpdateWithoutParticipantInput.schema'
import { ParticipationUncheckedUpdateWithoutParticipantInputObjectSchema } from './ParticipationUncheckedUpdateWithoutParticipantInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateWithWhereUniqueWithoutParticipantInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ParticipationUpdateWithoutParticipantInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedUpdateWithoutParticipantInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ParticipationUpdateWithWhereUniqueWithoutParticipantInputObjectSchema =
  Schema
