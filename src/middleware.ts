import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://poscidondao.com',
  'https://www.poscidondao.com',
  'https://www.poscidon.com',
];

export async function middleware(req: NextRequest) {
  const origin = req.headers.get('origin');
  const isDev = process.env.NODE_ENV == 'development';

  const headers = new Headers();

  // Handle preflight requests (CORS)
  if (req.method === 'OPTIONS') {
    headers.set('Access-Control-Allow-Origin', origin || '');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    headers.set('Access-Control-Allow-Credentials', 'true');
    return new NextResponse(null, { status: 204, headers });
  }

  // Generate a nonce for added CSP security
  const nonce = crypto.randomUUID();

  // Define different CSP for development and production
  const csp = isDev 
    ? // Development CSP - more permissive
      [
        `default-src 'self';`,
        `script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: 'nonce-${nonce}';`,
        `style-src 'self' 'unsafe-inline' https: http:;`,
        `font-src 'self' data: https: http:;`,
        `img-src 'self' data: https: http: blob:;`,
        `connect-src 'self' https: http:;`,
        `frame-src 'self' https: http:;`,
        `object-src 'none';`,
        `base-uri 'self';`,
        `frame-ancestors 'self' https://poscidondao.notion.site;`,
        `manifest-src 'self' https://www.poscidondao.com;`,
        `media-src 'self' https: http:;`,
      ].join(' ').trim()
    : // Production CSP - more restrictive
      [
        `default-src 'self';`,
        `script-src 'self' 'nonce-${nonce}' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;`,
        `style-src 'self' 'unsafe-inline' https://www.gstatic.com/;`,
        `font-src 'self' data:;`,
        `img-src 'self' data: https: blob:;`,
        `connect-src 'self' https://www.google.com/recaptcha/ https://*.google.com https://*.gstatic.com;`,
        `frame-src 'self' https://poscidondao.notion.site https://www.google.com/ https://recaptcha.google.com/;`,
        `object-src 'none';`,
        `base-uri 'self';`,
        `frame-ancestors 'self' https://poscidondao.notion.site;`,
        `manifest-src 'self' https://www.poscidondao.com;`,
        `media-src 'self';`,
      ].join(' ').trim();

  if (origin && allowedOrigins.includes(origin)) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Access-Control-Allow-Methods', 'GET, POST');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    headers.set('Access-Control-Allow-Credentials', 'true');
  }

  // Add headers
  headers.set('Content-Security-Policy', csp);
  headers.set('X-Content-Nonce', nonce);

  return NextResponse.next({ headers });
}

export const config = {
  matcher: ['/api/:path*', '/(.*)'],
};
