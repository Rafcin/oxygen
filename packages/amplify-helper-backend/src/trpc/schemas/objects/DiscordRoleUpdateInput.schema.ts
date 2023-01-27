import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { ParticipationUpdateManyWithoutParticipantRolesNestedInputObjectSchema } from './ParticipationUpdateManyWithoutParticipantRolesNestedInput.schema'
import { AccessLevelRoleUpdateOneWithoutDiscordRoleNestedInputObjectSchema } from './AccessLevelRoleUpdateOneWithoutDiscordRoleNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    participation: z
      .lazy(
        () => ParticipationUpdateManyWithoutParticipantRolesNestedInputObjectSchema
      )
      .optional(),
    role: z
      .lazy(() => AccessLevelRoleUpdateOneWithoutDiscordRoleNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordRoleUpdateInputObjectSchema = Schema
