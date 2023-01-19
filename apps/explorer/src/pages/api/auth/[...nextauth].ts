import NextAuth, { type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import DiscordProvider from 'next-auth/providers/discord'

// Prisma adapter for NextAuth =>
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/server/db/client'
import { env } from '@/env/server.mjs'

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID || '',
      clientSecret: env.GITHUB_CLIENT_SECRET || '',
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
      clientId: env.DISCORD_ID || '',
      clientSecret: env.DISCORD_CLEINT_SECRET || '',
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
  secret: env.NEXTAUTH_SECRET || '',
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        username: user.username,
      },
    }),
  },
}

export default NextAuth(authOptions)
