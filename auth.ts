import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from '@auth/prisma-adapter'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  logger: {
    error(error, ...message) {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
      console.log(error, message)
    },
  },
  debug: true,
  adapter: PrismaAdapter(prisma),
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
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      async profile(profile) {
        return { ...profile }
      },
      // Optional callback to customize the profile (user data) obtained from Google
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          // find user in database
          const user = await prisma.user.findUnique({
            where: {
              email: credentials?.email as string,
            },
          })
          // compare password with hashed password in database
          if (user) {
            const isPasswordValid = await bcrypt.compare(
              credentials?.password as string,
              user?.password as string
            )

            // if password is valid, return user, else return null
            if (isPasswordValid) {
              return user
            } else {
              return null
            }
          } else {
            return null
          }
        } catch (error) {
          console.log(error)
          throw new Error('Could not find user credentials')
        }
      },
    }),
  ],
})
