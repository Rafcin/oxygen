import { z } from 'zod'
import { AccessLevelRoleUncheckedCreateNestedManyWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUncheckedCreateNestedManyWithoutConfigurationInput.schema'
import { ConfigurationFeatureUncheckedCreateNestedManyWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUncheckedCreateNestedManyWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUncheckedCreateWithoutGuildInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    name: z.string(),
    roles: z
      .lazy(
        () =>
          AccessLevelRoleUncheckedCreateNestedManyWithoutConfigurationInputObjectSchema
      )
      .optional(),
    githubOrganization: z.string().optional().nullable(),
    features: z
      .lazy(
        () =>
          ConfigurationFeatureUncheckedCreateNestedManyWithoutConfigurationInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ConfigurationUncheckedCreateWithoutGuildInputObjectSchema = Schema
