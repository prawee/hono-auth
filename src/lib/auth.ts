import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { openAPI } from 'better-auth/plugins'
import { db } from '@/database/config'

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg'
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [
        openAPI(),
    ],
    socialProviders: {
        cognito: {
            enabled: true,
            clientId: process.env.COGNITO_CLIENT_ID as string,
            clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
            domain: process.env.COGNITO_DOMAIN as string,
            region: process.env.COGNITO_REGION as string,
            userPoolId: process.env.COGNITO_USERPOOL_ID as string,
        }
    }
})