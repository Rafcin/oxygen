import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { ParticipationUncheckedUpdateManyWithoutParticipantRolesNestedInputObjectSchema } from './ParticipationUncheckedUpdateManyWithoutParticipantRolesNestedInput.schema'
import { AccessLevelRoleUncheckedUpdateOneWithoutDiscordRoleNestedInputObjectSchema } from './AccessLevelRoleUncheckedUpdateOneWithoutDiscordRoleNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    participation: z
      .lazy(
        () =>
          ParticipationUncheckedUpdateManyWithoutParticipantRolesNestedInputObjectSchema
      )
      .optional(),
    role: z
      .lazy(
        () =>
          AccessLevelRoleUncheckedUpdateOneWithoutDiscordRoleNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DiscordRoleUncheckedUpdateInputObjectSchema = Schema
