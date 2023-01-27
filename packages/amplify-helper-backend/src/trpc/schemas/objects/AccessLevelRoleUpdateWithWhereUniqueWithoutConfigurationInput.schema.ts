import { z } from 'zod'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleUpdateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUpdateWithoutConfigurationInput.schema'
import { AccessLevelRoleUncheckedUpdateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUncheckedUpdateWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUpdateWithWhereUniqueWithoutConfigurationInput> =
  z
    .object({
      where: z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AccessLevelRoleUpdateWithoutConfigurationInputObjectSchema),
        z.lazy(
          () => AccessLevelRoleUncheckedUpdateWithoutConfigurationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const AccessLevelRoleUpdateWithWhereUniqueWithoutConfigurationInputObjectSchema =
  Schema
