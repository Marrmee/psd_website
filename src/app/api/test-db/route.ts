import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    // Test database connection
    const result = await pool.sql`SELECT NOW() as current_time, version() as db_version`;
    
    // Test if table exists
    const tableCheck = await pool.sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'project_submissions'
      ) as table_exists
    `;

    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      currentTime: result.rows[0].current_time,
      dbVersion: result.rows[0].db_version,
      tableExists: tableCheck.rows[0].table_exists,
    });
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Database connection failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

