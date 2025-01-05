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

  const isDev = process.env.NODE_ENV === 'development';
  const headers = new Headers();
  // Handle preflight requests for CORS
  if (req.method === 'OPTIONS') {

    headers.set('Access-Control-Allow-Origin', origin || '');
    headers.set('Access-Control-Allow-Methods', 'GET, POST');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    headers.set('Access-Control-Allow-Credentials', 'true');

    return new NextResponse(null, { status: 204, headers });
  }

  // Generate a unique nonce for CSP
  const nonce = crypto.randomUUID();

  // Create a sanitized CSP string
  const csp = [
    `default-src 'self';`,
    `script-src 'self' 'nonce-${nonce}' ${isDev ? "'unsafe-eval'" : ""};`,
    `style-src 'self' 'unsafe-inline';`,
    `font-src 'self';`,
    `img-src 'self' data: https: blob:;`,
    `connect-src 'self';`,
    `frame-src 'self' https://silksecure.net/;`,
    `object-src 'none';`,
    `base-uri 'self';`,
    `frame-ancestors 'none' https://poscidondao.notion.site;`,
    `manifest-src 'self' https://protocol.poscidondao.com;`,
  ]
    .join(' ')
    .trim();
  

  if (origin && allowedOrigins.includes(origin)) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Access-Control-Allow-Methods', 'GET, POST');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    headers.set('Access-Control-Allow-Credentials', 'true');
  }

  headers.set('Content-Security-Policy', csp);
  headers.set('X-Content-Nonce', nonce); // Expose nonce for server-side rendering

  const response = NextResponse.next({ headers });
  return response;
}

export const config = {
  matcher: ['/api/:path*', '/(.*)'],
};
