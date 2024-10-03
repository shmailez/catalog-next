import type { AuthOptions } from 'next-auth'
import GoggleProvider from 'next-auth/providers/google'

export const authCoufig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
    ],
}