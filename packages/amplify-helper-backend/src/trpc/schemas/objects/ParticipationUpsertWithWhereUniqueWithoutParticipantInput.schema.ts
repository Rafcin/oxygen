import { z } from 'zod'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationUpdateWithoutParticipantInputObjectSchema } from './ParticipationUpdateWithoutParticipantInput.schema'
import { ParticipationUncheckedUpdateWithoutParticipantInputObjectSchema } from './ParticipationUncheckedUpdateWithoutParticipantInput.schema'
import { ParticipationCreateWithoutParticipantInputObjectSchema } from './ParticipationCreateWithoutParticipantInput.schema'
import { ParticipationUncheckedCreateWithoutParticipantInputObjectSchema } from './ParticipationUncheckedCreateWithoutParticipantInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpsertWithWhereUniqueWithoutParticipantInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ParticipationUpdateWithoutParticipantInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedUpdateWithoutParticipantInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutParticipantInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedCreateWithoutParticipantInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ParticipationUpsertWithWhereUniqueWithoutParticipantInputObjectSchema =
  Schema
