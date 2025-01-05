import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://poscidondao.com',
  'https://www.poscidondao.com',
  'https://www.poscidon.com',
];

export function middleware(req: NextRequest) {
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

  // Define a robust Content-Security-Policy
  const csp = [
    `default-src 'self';`,
    `script-src 'self' 'nonce-${nonce}' ${isDev ? "'unsafe-eval'" : ""};`,
    `style-src 'self' 'unsafe-inline';`,
    `font-src 'self';`,
    `img-src 'self' data: https: blob:;`,
    `connect-src 'self';`,
    `frame-src 'self' https://poscidondao.notion.site;`,
    `object-src 'none';`,
    `base-uri 'self';`,
    `frame-ancestors 'self' https://poscidondao.notion.site;`,
    `manifest-src 'self' https://www.poscidondao.com;`,
  ]
    .join(' ')
    .trim();

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
