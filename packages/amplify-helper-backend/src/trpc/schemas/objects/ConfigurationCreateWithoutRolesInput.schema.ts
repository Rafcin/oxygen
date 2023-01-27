import { z } from 'zod'
import { GuildCreateNestedOneWithoutConfigurationInputObjectSchema } from './GuildCreateNestedOneWithoutConfigurationInput.schema'
import { ConfigurationFeatureCreateNestedManyWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureCreateNestedManyWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationCreateWithoutRolesInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    name: z.string(),
    githubOrganization: z.string().optional().nullable(),
    guild: z.lazy(() => GuildCreateNestedOneWithoutConfigurationInputObjectSchema),
    features: z
      .lazy(
        () =>
          ConfigurationFeatureCreateNestedManyWithoutConfigurationInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ConfigurationCreateWithoutRolesInputObjectSchema = Schema
