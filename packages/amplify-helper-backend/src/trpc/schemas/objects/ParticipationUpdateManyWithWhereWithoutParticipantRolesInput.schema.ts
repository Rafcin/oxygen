import { z } from 'zod'
import { ParticipationScalarWhereInputObjectSchema } from './ParticipationScalarWhereInput.schema'
import { ParticipationUpdateManyMutationInputObjectSchema } from './ParticipationUpdateManyMutationInput.schema'
import { ParticipationUncheckedUpdateManyWithoutParticipationInputObjectSchema } from './ParticipationUncheckedUpdateManyWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateManyWithWhereWithoutParticipantRolesInput> =
  z
    .object({
      where: z.lazy(() => ParticipationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ParticipationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedUpdateManyWithoutParticipationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ParticipationUpdateManyWithWhereWithoutParticipantRolesInputObjectSchema =
  Schema
