import { z } from 'zod'
import { ParticipationCreateWithoutQuestionInputObjectSchema } from './ParticipationCreateWithoutQuestionInput.schema'
import { ParticipationUncheckedCreateWithoutQuestionInputObjectSchema } from './ParticipationUncheckedCreateWithoutQuestionInput.schema'
import { ParticipationCreateOrConnectWithoutQuestionInputObjectSchema } from './ParticipationCreateOrConnectWithoutQuestionInput.schema'
import { ParticipationUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './ParticipationUpsertWithWhereUniqueWithoutQuestionInput.schema'
import { ParticipationCreateManyQuestionInputEnvelopeObjectSchema } from './ParticipationCreateManyQuestionInputEnvelope.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './ParticipationUpdateWithWhereUniqueWithoutQuestionInput.schema'
import { ParticipationUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './ParticipationUpdateManyWithWhereWithoutQuestionInput.schema'
import { ParticipationScalarWhereInputObjectSchema } from './ParticipationScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateManyWithoutQuestionNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ParticipationUpsertWithWhereUniqueWithoutQuestionInputObjectSchema
        ),
        z
          .lazy(
            () => ParticipationUpsertWithWhereUniqueWithoutQuestionInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ParticipationCreateManyQuestionInputEnvelopeObjectSchema)
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
          () => ParticipationUpdateWithWhereUniqueWithoutQuestionInputObjectSchema
        ),
        z
          .lazy(
            () => ParticipationUpdateWithWhereUniqueWithoutQuestionInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ParticipationUpdateManyWithWhereWithoutQuestionInputObjectSchema
        ),
        z
          .lazy(
            () => ParticipationUpdateManyWithWhereWithoutQuestionInputObjectSchema
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

export const ParticipationUpdateManyWithoutQuestionNestedInputObjectSchema = Schema
