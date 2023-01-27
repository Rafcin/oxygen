import { z } from 'zod'
import { ParticipationCreateWithoutQuestionInputObjectSchema } from './ParticipationCreateWithoutQuestionInput.schema'
import { ParticipationUncheckedCreateWithoutQuestionInputObjectSchema } from './ParticipationUncheckedCreateWithoutQuestionInput.schema'
import { ParticipationCreateOrConnectWithoutQuestionInputObjectSchema } from './ParticipationCreateOrConnectWithoutQuestionInput.schema'
import { ParticipationCreateManyQuestionInputEnvelopeObjectSchema } from './ParticipationCreateManyQuestionInputEnvelope.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateNestedManyWithoutQuestionInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ParticipationCreateWithoutQuestionInputObjectSchema),
        z.lazy(() => ParticipationCreateWithoutQuestionInputObjectSchema).array(),
        z.lazy(() => ParticipationUncheckedCreateWithoutQuestionInputObjectSchema),
        z
          .lazy(() => ParticipationUncheckedCreateWithoutQuestionInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ParticipationCreateOrConnectWithoutQuestionInputObjectSchema),
        z
          .lazy(() => ParticipationCreateOrConnectWithoutQuestionInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ParticipationCreateManyQuestionInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
        z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const ParticipationCreateNestedManyWithoutQuestionInputObjectSchema = Schema
