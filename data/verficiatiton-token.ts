import { db } from '@/lib/db'

export const getVerificatitonTokenByToken = async (token: string) => {
    try {
        const verificatitonToken = await db.verificationToken.findUnique({
            where: { token }
        })

        return verificatitonToken
    } catch {
        return null
    }
}

export const getVerificatitonTokenByEmail = async (email: string) => {
    try {
        const verificatitonToken = await db.verificationToken.findFirst({
            where: { email }
        })

        return verificatitonToken
    } catch {
        return null
    }
}
