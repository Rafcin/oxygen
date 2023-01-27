import { z } from 'zod'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleUpdateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUpdateWithoutConfigurationInput.schema'
import { AccessLevelRoleUncheckedUpdateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUncheckedUpdateWithoutConfigurationInput.schema'
import { AccessLevelRoleCreateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleCreateWithoutConfigurationInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUpsertWithWhereUniqueWithoutConfigurationInput> =
  z
    .object({
      where: z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AccessLevelRoleUpdateWithoutConfigurationInputObjectSchema),
        z.lazy(
          () => AccessLevelRoleUncheckedUpdateWithoutConfigurationInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => AccessLevelRoleCreateWithoutConfigurationInputObjectSchema),
        z.lazy(
          () => AccessLevelRoleUncheckedCreateWithoutConfigurationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const AccessLevelRoleUpsertWithWhereUniqueWithoutConfigurationInputObjectSchema =
  Schema
