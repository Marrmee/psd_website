import { NextRequest, NextResponse } from 'next/server';
import { validateRecaptcha } from '@/components/recaptcha-utils';
import { pool } from '@/lib/db';

interface ProjectSubmission {
  txId?: string;
  title: string;
  stage: string;
  description: string;
  strategy: string;
  country: string;
  address?: string;
  funds: string | number;
  name: string;
  email: string;
  phone: string;
  telegram: string;
  referralSource: string;
  referrerName?: string;
  referrerEmail?: string;
  reference1Name: string;
  reference1Email: string;
  reference2Name: string;
  reference2Email: string;
  reference3Name: string;
  reference3Email: string;
  captchaToken: string;
}

export async function POST(req: NextRequest) {
  console.log('========================================');
  console.log('[API] POST /api/project - Request received');
  console.log('[API] Timestamp:', new Date().toISOString());
  
  try {
    console.log('[API] Step 1: Parsing request body...');
    const body = await req.json() as ProjectSubmission;
    console.log('[API] Body parsed successfully. Fields received:', Object.keys(body));
    console.log('[API] Project title:', body.title);
    console.log('[API] Full body:', JSON.stringify(body, null, 2));

    const { captchaToken } = body;

    console.log('[API] Step 2: Verifying reCAPTCHA...');
    console.log('[API] Captcha token present:', !!captchaToken);
    
    // Verify reCAPTCHA
    const { verified, errorResponse } = await validateRecaptcha(captchaToken);

    if (!verified) {
      console.error('[API] ❌ reCAPTCHA verification failed:', errorResponse?.error);
      return NextResponse.json(
        { error: errorResponse?.error || 'reCAPTCHA verification failed' },
        { status: errorResponse?.status || 400 },
      );
    }
    
    console.log('[API] ✅ reCAPTCHA verified successfully');
    
    const {
      txId,
      title,
      stage,
      description,
      strategy,
      country,
      address,
      funds,
      name,
      email,
      phone,
      telegram,
      referralSource,
      referrerName,
      referrerEmail,
      reference1Name,
      reference1Email,
      reference2Name,
      reference2Email,
      reference3Name,
      reference3Email,
    } = body;

    console.log('[API] Step 3: Validating required fields...');
    
    // Validate required fields
    const requiredFields = {
      title,
      stage,
      description,
      strategy,
      country,
      funds,
      name,
      email,
      phone,
      telegram,
      referralSource,
      reference1Name,
      reference1Email,
      reference2Name,
      reference2Email,
      reference3Name,
      reference3Email,
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key, _]) => key);

    if (missingFields.length > 0) {
      console.error('[API] ❌ Missing required fields:', missingFields);
      return NextResponse.json(
        { error: 'Missing required fields', fields: missingFields },
        { status: 400 }
      );
    }
    
    console.log('[API] ✅ All required fields present');

    console.log('[API] Step 4: Validating email formats...');
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('[API] ❌ Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate reference emails
    if (!emailRegex.test(reference1Email) || !emailRegex.test(reference2Email) || !emailRegex.test(reference3Email)) {
      console.error('[API] ❌ Invalid reference email format');
      return NextResponse.json(
        { error: 'Invalid reference email format' },
        { status: 400 }
      );
    }
    
    console.log('[API] ✅ All emails valid');

    console.log('[API] Step 5: Validating funds...');
    
    // Validate funds is a positive number
    const fundsNumber = typeof funds === 'string' ? parseFloat(funds) : funds;
    if (isNaN(fundsNumber) || fundsNumber <= 0) {
      console.error('[API] ❌ Invalid funds amount:', funds);
      return NextResponse.json(
        { error: 'Funds must be a positive number' },
        { status: 400 }
      );
    }
    
    console.log('[API] ✅ Funds valid:', fundsNumber);

    console.log('[API] Step 6: Validating Ethereum address (if provided)...');
    
    // Validate Ethereum address if provided
    if (address && !/^0x[a-fA-F0-9]{40}$/.test(address)) {
      console.error('[API] ❌ Invalid Ethereum address format:', address);
      return NextResponse.json(
        { error: 'Invalid Ethereum address format' },
        { status: 400 }
      );
    }
    
    if (address) {
      console.log('[API] ✅ Ethereum address valid');
    } else {
      console.log('[API] ℹ️  No Ethereum address provided');
    }

    console.log('[API] Step 7: Attempting database insertion...');
    console.log('[API] Database URL configured:', !!process.env.DATABASE_URL);
    
    // Insert into PostgreSQL database using Vercel Postgres
    const result = await pool.sql`
      INSERT INTO project_submissions (
        tx_id,
        title,
        stage,
        description,
        strategy,
        country,
        address,
        funds,
        name,
        email,
        phone,
        telegram,
        referral_source,
        referrer_name,
        referrer_email,
        reference1_name,
        reference1_email,
        reference2_name,
        reference2_email,
        reference3_name,
        reference3_email
      ) VALUES (
        ${txId || 'N/A'},
        ${title},
        ${stage},
        ${description},
        ${strategy},
        ${country},
        ${address || null},
        ${fundsNumber},
        ${name},
        ${email},
        ${phone},
        ${telegram},
        ${referralSource},
        ${referrerName || null},
        ${referrerEmail || null},
        ${reference1Name},
        ${reference1Email},
        ${reference2Name},
        ${reference2Email},
        ${reference3Name},
        ${reference3Email}
      )
      RETURNING id, created_at
    `;

    console.log('[API] ✅ Database query executed');
    console.log('[API] Result rows count:', result.rows?.length);

    // Verify we got a result
    if (!result.rows || result.rows.length === 0) {
      console.error('[API] ❌ Database insertion failed - no record returned');
      throw new Error('Database insertion failed - no record returned');
    }

    const insertedRecord = result.rows[0];

    console.log('[API] ✅ Project saved to database successfully!');
    console.log('[API] Inserted record ID:', insertedRecord.id);
    console.log('[API] Created at:', insertedRecord.created_at);
    console.log('[API] Step 8: Sending success response...');
    console.log('========================================');

    return NextResponse.json({ 
      success: true, 
      id: insertedRecord.id,
      createdAt: insertedRecord.created_at,
      message: 'Project submitted successfully' 
    });

  } catch (error) {
    console.error('========================================');
    console.error('[API] ❌ ERROR occurred during submission');
    console.error('[API] Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('[API] Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('[API] Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('[API] Full error object:', error);
    console.error('========================================');
    
    // Provide more specific error messages
    let errorMessage = 'Failed to submit project';
    let statusCode = 500;

    if (error instanceof Error) {
      // Database connection errors
      if (error.message.includes('connect') || error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Database connection failed';
        console.error('[API] Database connection error detected');
      }
      // Database constraint violations
      else if (error.message.includes('constraint') || error.message.includes('unique')) {
        errorMessage = 'Data validation failed';
        statusCode = 400;
        console.error('[API] Database constraint violation detected');
      }
      // Table doesn't exist
      else if (error.message.includes('does not exist') || error.message.includes('relation')) {
        errorMessage = 'Database table not found';
        console.error('[API] Database table not found');
      }
      // DATABASE_URL not set
      else if (error.message.includes('DATABASE_URL')) {
        errorMessage = 'Database not configured';
        console.error('[API] DATABASE_URL environment variable not set');
      }
    }

    console.error('[API] Returning error response:', { errorMessage, statusCode });

    return NextResponse.json(
      { 
        error: errorMessage, 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: statusCode }
    );
  }
}