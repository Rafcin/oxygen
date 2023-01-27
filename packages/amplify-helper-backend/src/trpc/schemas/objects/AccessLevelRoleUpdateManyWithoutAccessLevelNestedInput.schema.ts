import { z } from 'zod'
import { AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleCreateWithoutAccessLevelInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutAccessLevelInput.schema'
import { AccessLevelRoleCreateOrConnectWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleCreateOrConnectWithoutAccessLevelInput.schema'
import { AccessLevelRoleUpsertWithWhereUniqueWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUpsertWithWhereUniqueWithoutAccessLevelInput.schema'
import { AccessLevelRoleCreateManyAccessLevelInputEnvelopeObjectSchema } from './AccessLevelRoleCreateManyAccessLevelInputEnvelope.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleUpdateWithWhereUniqueWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUpdateWithWhereUniqueWithoutAccessLevelInput.schema'
import { AccessLevelRoleUpdateManyWithWhereWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUpdateManyWithWhereWithoutAccessLevelInput.schema'
import { AccessLevelRoleScalarWhereInputObjectSchema } from './AccessLevelRoleScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUpdateManyWithoutAccessLevelNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema),
          z
            .lazy(() => AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema)
            .array(),
          z.lazy(
            () => AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema
          ),
          z
            .lazy(
              () => AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => AccessLevelRoleCreateOrConnectWithoutAccessLevelInputObjectSchema
          ),
          z
            .lazy(
              () => AccessLevelRoleCreateOrConnectWithoutAccessLevelInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              AccessLevelRoleUpsertWithWhereUniqueWithoutAccessLevelInputObjectSchema
          ),
          z
            .lazy(
              () =>
                AccessLevelRoleUpsertWithWhereUniqueWithoutAccessLevelInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccessLevelRoleCreateManyAccessLevelInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              AccessLevelRoleUpdateWithWhereUniqueWithoutAccessLevelInputObjectSchema
          ),
          z
            .lazy(
              () =>
                AccessLevelRoleUpdateWithWhereUniqueWithoutAccessLevelInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              AccessLevelRoleUpdateManyWithWhereWithoutAccessLevelInputObjectSchema
          ),
          z
            .lazy(
              () =>
                AccessLevelRoleUpdateManyWithWhereWithoutAccessLevelInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AccessLevelRoleScalarWhereInputObjectSchema),
          z.lazy(() => AccessLevelRoleScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const AccessLevelRoleUpdateManyWithoutAccessLevelNestedInputObjectSchema =
  Schema
