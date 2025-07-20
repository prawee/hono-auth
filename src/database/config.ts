import { drizle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from '@/database/schema'

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
})

export const db = drizle(pool, { schema, casing: 'snake_case' })