import { t } from "./helpers/createRouter";
import { guildsRouter } from "./Guild.router";
import { questionsRouter } from "./Question.router";
import { questiontagsRouter } from "./QuestionTag.router";
import { participationsRouter } from "./Participation.router";
import { discordrolesRouter } from "./DiscordRole.router";
import { discordusersRouter } from "./DiscordUser.router";
import { eventschedulesRouter } from "./EventSchedule.router";
import { discordeventsRouter } from "./DiscordEvent.router";
import { discordeventattendeesRouter } from "./DiscordEventAttendee.router";
import { githubdiscussionsRouter } from "./GitHubDiscussion.router";
import { answersRouter } from "./Answer.router";
import { accesslevelsRouter } from "./AccessLevel.router";
import { accesslevelrolesRouter } from "./AccessLevelRole.router";
import { configurationsRouter } from "./Configuration.router";
import { configurationfeaturesRouter } from "./ConfigurationFeature.router";
import { auditlogsRouter } from "./AuditLog.router";
import { featuresRouter } from "./Feature.router";
import { featuretypesRouter } from "./FeatureType.router";
import { featureinputsRouter } from "./FeatureInputs.router";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { usersRouter } from "./User.router";
import { verificationtokensRouter } from "./VerificationToken.router";

export const appRouter = t.router({
  guild: guildsRouter,
  question: questionsRouter,
  questiontag: questiontagsRouter,
  participation: participationsRouter,
  discordrole: discordrolesRouter,
  discorduser: discordusersRouter,
  eventschedule: eventschedulesRouter,
  discordevent: discordeventsRouter,
  discordeventattendee: discordeventattendeesRouter,
  githubdiscussion: githubdiscussionsRouter,
  answer: answersRouter,
  accesslevel: accesslevelsRouter,
  accesslevelrole: accesslevelrolesRouter,
  configuration: configurationsRouter,
  configurationfeature: configurationfeaturesRouter,
  auditlog: auditlogsRouter,
  feature: featuresRouter,
  featuretype: featuretypesRouter,
  featureinputs: featureinputsRouter,
  account: accountsRouter,
  session: sessionsRouter,
  user: usersRouter,
  verificationtoken: verificationtokensRouter
})

