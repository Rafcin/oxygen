import { t } from "./helpers/createRouter";
import { sanitiesRouter } from "./Sanity.router";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { verificationtokensRouter } from "./VerificationToken.router";
import { usersRouter } from "./User.router";
import { guildsRouter } from "./Guild.router";
import { rolesRouter } from "./Role.router";
import { emojisRouter } from "./Emoji.router";
import { reactionsRouter } from "./Reaction.router";
import { messagesRouter } from "./Message.router";
import { channelsRouter } from "./Channel.router";

export const appRouter = t.router({
  sanity: sanitiesRouter,
  account: accountsRouter,
  session: sessionsRouter,
  verificationtoken: verificationtokensRouter,
  user: usersRouter,
  guild: guildsRouter,
  role: rolesRouter,
  emoji: emojisRouter,
  reaction: reactionsRouter,
  message: messagesRouter,
  channel: channelsRouter
})

