import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaClient(prisma),
  providers: [
    // Google,
    // Credentials({
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   authorize: async (credentials) => {
    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: credentials?.email,
    //       },
    //     })
    //     if (user?.password === credentials?.password) {
    //       return user
    //     } else {
    //       return null
    //     }
    //   },
    // }),
  ],
})
