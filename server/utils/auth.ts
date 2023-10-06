import { lucia } from 'lucia'
import { h3 } from 'lucia/middleware'
import { prisma } from '@lucia-auth/adapter-prisma'
import { PrismaClient } from '@prisma/client'
import 'lucia/polyfill/node'

const client = new PrismaClient()

export const auth = lucia({
  env: process.dev ? 'DEV' : 'PROD',
  middleware: h3(),
  adapter: prisma(client, {
    user: 'user',
    key: 'authKey',
    session: 'authSession'
  }),
  getUserAttributes: (data) => {
    return {
      email: data.email,
      authRole: data.authRole
    }
  },
  getSessionAttributes: (data) => {
    return {
      createdAt: data.createdAt
    }
  }
})

export type Auth = typeof auth
