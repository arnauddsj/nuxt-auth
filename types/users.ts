import { z } from 'zod'

export const emailSchema = z.string({ required_error: 'Email is required' }).email({ message: 'Email must be a valid email address' })
export const passwordSchema = z.string({ required_error: 'Password is required' }).min(8, { message: 'Password must be at least 8 characters long' }).max(100)

export type EmailType = z.infer<typeof emailSchema>
export type PasswordType = z.infer<typeof passwordSchema>

export interface IdName {
    id: string
    name: string
}

export interface User {
    id: string
    email: EmailType
    name: string
    authStatus: string
    lastLogin: Date | null
    company: string | null
    region: IdName | null
    group: IdName | null
}

export interface Group {
    id: string
    name: string
    members: IdName[] | null
}

export interface Region {
    id: string
    name: string
    managers: IdName[] | null
    defaultGroup: IdName
}