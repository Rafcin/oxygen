import { type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import DiscordProvider from 'next-auth/providers/discord'

// Prisma adapter for NextAuth =>
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/db/'
import { server_env } from '@/env/server'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: server_env.GITHUB_ID || '',
      clientSecret: server_env.GITHUB_CLIENT_SECRET || '',
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.username,
          username: profile.username,
          email: profile.email,
          image: profile.avatar,
        }
      },
    }),
    DiscordProvider({
      clientId: server_env.DISCORD_ID || '',
      clientSecret: server_env.DISCORD_CLEINT_SECRET || '',
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      },
    }),
  ],
  debug: true,
  secret: server_env.NEXTAUTH_SECRET || '',
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        //@ts-ignore
        username: user.username,
      },
    }),
  },
}
