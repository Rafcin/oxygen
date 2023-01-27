import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AccessLevelRoleUncheckedUpdateManyWithoutConfigurationNestedInputObjectSchema } from './AccessLevelRoleUncheckedUpdateManyWithoutConfigurationNestedInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { ConfigurationFeatureUncheckedUpdateManyWithoutConfigurationNestedInputObjectSchema } from './ConfigurationFeatureUncheckedUpdateManyWithoutConfigurationNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUncheckedUpdateWithoutGuildInput> = z
  .object({
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    roles: z
      .lazy(
        () =>
          AccessLevelRoleUncheckedUpdateManyWithoutConfigurationNestedInputObjectSchema
      )
      .optional(),
    githubOrganization: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    features: z
      .lazy(
        () =>
          ConfigurationFeatureUncheckedUpdateManyWithoutConfigurationNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ConfigurationUncheckedUpdateWithoutGuildInputObjectSchema = Schema
