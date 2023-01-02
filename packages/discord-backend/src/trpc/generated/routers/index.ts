import { t } from "./helpers/createRouter";
import { usersRouter } from "./User.router";
import { guildsRouter } from "./Guild.router";
import { rolesRouter } from "./Role.router";
import { emojisRouter } from "./Emoji.router";
import { reactionsRouter } from "./Reaction.router";
import { messagesRouter } from "./Message.router";
import { channelsRouter } from "./Channel.router";

export const appRouter = t.router({
  user: usersRouter,
  guild: guildsRouter,
  role: rolesRouter,
  emoji: emojisRouter,
  reaction: reactionsRouter,
  message: messagesRouter,
  channel: channelsRouter
})

