import { createPool } from '@vercel/postgres';

console.log('[DB] Initializing database connection...');
console.log('[DB] DATABASE_URL present:', !!process.env.DATABASE_URL);
console.log('[DB] DATABASE_URL length:', process.env.DATABASE_URL?.length || 0);

// Explicitly use DATABASE_URL environment variable
if (!process.env.DATABASE_URL) {
  console.error('[DB] ❌ DATABASE_URL environment variable is not set!');
  throw new Error('DATABASE_URL environment variable is not set');
}

console.log('[DB] Creating connection pool...');
export const pool = createPool({
  connectionString: process.env.DATABASE_URL,
});
console.log('[DB] ✅ Connection pool created successfully');

