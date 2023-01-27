import { z } from 'zod'
import { DiscordEventSelectObjectSchema } from './objects/DiscordEventSelect.schema'
import { DiscordEventIncludeObjectSchema } from './objects/DiscordEventInclude.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './objects/DiscordEventWhereUniqueInput.schema'
import { DiscordEventCreateInputObjectSchema } from './objects/DiscordEventCreateInput.schema'
import { DiscordEventUncheckedCreateInputObjectSchema } from './objects/DiscordEventUncheckedCreateInput.schema'
import { DiscordEventUpdateInputObjectSchema } from './objects/DiscordEventUpdateInput.schema'
import { DiscordEventUncheckedUpdateInputObjectSchema } from './objects/DiscordEventUncheckedUpdateInput.schema'

export const DiscordEventUpsertSchema = z.object({
  select: DiscordEventSelectObjectSchema.optional(),
  include: DiscordEventIncludeObjectSchema.optional(),
  where: DiscordEventWhereUniqueInputObjectSchema,
  create: z.union([
    DiscordEventCreateInputObjectSchema,
    DiscordEventUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DiscordEventUpdateInputObjectSchema,
    DiscordEventUncheckedUpdateInputObjectSchema,
  ]),
})
