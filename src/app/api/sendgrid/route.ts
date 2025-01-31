import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { rateLimiter } from '@/lib/rate-limit';
import { getClientIP } from '@/lib/get-ip';

export async function POST(req) {
  console.log('Starting sendgrid notification request');
  try {
    const ip = getClientIP();
    console.log('Request IP:', ip);
    
    // Use shared rate limiter
    const { success } = await rateLimiter.limit(`${ip}_notification`);
    if (!success) {
      console.log('Rate limit exceeded for IP:', ip);
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    // Parse and log request body
    const body = await req.json();
    console.log('Request body:', { ...body, captchaToken: '[REDACTED]' });
    
    const { email, name, captchaToken } = body;

    // Verify CAPTCHA
    console.log('Verifying CAPTCHA...');
    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`
    });

    const captchaResult = await captchaResponse.json();
    console.log('CAPTCHA result:', { ...captchaResult, score: captchaResult.score });
    
    if (!captchaResult.success) {
      console.log('CAPTCHA verification failed:', captchaResult['error-codes']);
      const errorMessage = captchaResult['error-codes']?.includes('timeout-or-duplicate')
        ? 'Security check timed out, please try again'
        : 'Security check failed';
      
      return NextResponse.json(
        { error: errorMessage },
        { status: 400 }
      );
    }

    // Validate inputs
    if (!email || !name || typeof email !== 'string' || typeof name !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input format' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate environment variables
    const requiredEnvVars = {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      VERIFIED_SENDER_EMAIL_PERSONAL: process.env.VERIFIED_SENDER_EMAIL_PERSONAL,
      VERIFIED_SENDER_EMAIL_GENERAL: process.env.VERIFIED_SENDER_EMAIL_GENERAL
    };

    const missingVars = Object.entries(requiredEnvVars)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingVars.length > 0) {
      console.error('Missing environment variables:', missingVars);
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Initialize SendGrid
    console.log('Initializing SendGrid...');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    // Send both emails
    await Promise.all([
      // Notification email
      sgMail.sendMultiple({
        from: process.env.VERIFIED_SENDER_EMAIL_PERSONAL as string,
        to: [
          process.env.VERIFIED_SENDER_EMAIL_PERSONAL as string,
          process.env.VERIFIED_SENDER_EMAIL_GENERAL as string
        ],
        subject: 'New Newsletter Subscription',
        text: `New subscription from:
Name: ${name.substring(0, 100)}
Email: ${email}
Time: ${new Date().toISOString()}
IP: ${ip}
reCAPTCHA score: ${captchaResult.score}`,
      }),
      
      // Welcome email
      sgMail.send({
        from: {
          email: process.env.VERIFIED_SENDER_EMAIL_PERSONAL as string,
          name: 'Marco from PoSciDonDAO'
        },
        to: email,
        templateId: process.env.TEMPLATE_ID as string
      })
    ]);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Detailed error in sendgrid notification:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
