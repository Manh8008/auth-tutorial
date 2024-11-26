import { DefaultSession } from 'next-auth'
import { UserRole } from '@prisma/client'

export type ExtenderUser = DefaultSession['user'] & {
    role: UserRole
}

declare module 'next-auth' {
    interface Session {
        user: ExtenderUser
    }
}
