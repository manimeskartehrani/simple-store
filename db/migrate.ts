import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db, connection } from './client'


await migrate(db, { migrationsFolder: './db/drizzle' })

await connection.end()