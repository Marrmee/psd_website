import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://poscidon.com',
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
    ? // Development CSP - more permissive (includes 'unsafe-eval' for Next.js hot reload)
      [
        `default-src 'self';`,
        `script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.googletagmanager.com;`,
        `style-src 'self' 'unsafe-inline' https://www.gstatic.com/;`,
        `font-src 'self' data:;`,
        `img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com;`,
        `connect-src 'self' ws: wss: https://www.google.com/recaptcha/ https://www.gstatic.com/ https://www.google-analytics.com https://analytics.google.com;`,
        `frame-src 'self' https://poscidondao.notion.site https://poscidon.notion.site https://www.google.com/ https://recaptcha.google.com/;`,
        `object-src 'none';`,
        `base-uri 'self';`,
        `frame-ancestors 'self' https://poscidondao.notion.site https://poscidon.notion.site;`,
        `manifest-src 'self' https://www.poscidon.com;`,
        `media-src 'self';`,
      ].join(' ').trim()
    : // Production CSP - more restrictive
      [
        `default-src 'self';`,
        `script-src 'self' 'nonce-${nonce}' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.googletagmanager.com;`,
        `style-src 'self' 'unsafe-inline' https://www.gstatic.com/;`,
        `font-src 'self' data:;`,
        `img-src 'self' data: https://www.gstatic.com/ blob: https://www.google-analytics.com https://www.googletagmanager.com;`,
        `connect-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/ https://www.google-analytics.com https://analytics.google.com;`,
        `frame-src 'self' https://poscidondao.notion.site https://poscidon.notion.site https://www.google.com/ https://recaptcha.google.com/;`,
        `object-src 'none';`,
        `base-uri 'self';`,
        `frame-ancestors 'self' https://poscidondao.notion.site https://poscidon.notion.site;`,
        `manifest-src 'self' https://www.poscidon.com;`,
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
  matcher: [
    '/((?!_next/static|_next/image|favicon|.*\\.png$|.*\\.ico$|.*\\.svg$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.otf$|.*\\.woff2?$|.*\\.ttf$|.*\\.pdf$|robots\\.txt$|sitemap\\.xml$|manifest\\.json$|browserconfig\\.xml$).*)',
  ],
};
