import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AccessLevelRoleUpdateManyWithoutConfigurationNestedInputObjectSchema } from './AccessLevelRoleUpdateManyWithoutConfigurationNestedInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { GuildUpdateOneRequiredWithoutConfigurationNestedInputObjectSchema } from './GuildUpdateOneRequiredWithoutConfigurationNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUpdateWithoutFeaturesInput> = z
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
        () => AccessLevelRoleUpdateManyWithoutConfigurationNestedInputObjectSchema
      )
      .optional(),
    githubOrganization: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    guild: z
      .lazy(() => GuildUpdateOneRequiredWithoutConfigurationNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const ConfigurationUpdateWithoutFeaturesInputObjectSchema = Schema
