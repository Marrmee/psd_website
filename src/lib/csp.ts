import { createHash } from 'crypto'

import { ANTI_CLICKJACK_SCRIPT } from './inline-scripts'

const SCRIPT_HOSTS = [
  'https://www.google.com/recaptcha/',
  'https://www.gstatic.com/recaptcha/',
  'https://www.googletagmanager.com',
] as const

const FRAME_HOSTS = [
  "'self'",
  'https://poscidondao.notion.site',
  'https://poscidon.notion.site',
  'https://www.google.com/',
  'https://recaptcha.google.com/',
] as const

function scriptSrcHash(content: string): string {
  const digest = createHash('sha256').update(content, 'utf8').digest('base64')
  return `'sha256-${digest}'`
}

export function buildContentSecurityPolicy(isDev: boolean): string {
  const scriptSrc = isDev
    ? [
        "'self'",
        "'unsafe-eval'",
        "'unsafe-inline'",
        ...SCRIPT_HOSTS,
      ].join(' ')
    : [
        "'self'",
        scriptSrcHash(ANTI_CLICKJACK_SCRIPT),
        ...SCRIPT_HOSTS,
      ].join(' ')

  const directives = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline' https://www.gstatic.com/",
    "font-src 'self' data:",
    isDev
      ? "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com"
      : "img-src 'self' data: https://www.gstatic.com/ blob: https://www.google-analytics.com https://www.googletagmanager.com",
    isDev
      ? "connect-src 'self' ws: wss: https://www.google.com/recaptcha/ https://www.gstatic.com/ https://www.google-analytics.com https://analytics.google.com"
      : "connect-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/ https://www.google-analytics.com https://analytics.google.com",
    `frame-src ${FRAME_HOSTS.join(' ')}`,
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'self' https://poscidondao.notion.site https://poscidon.notion.site",
    "manifest-src 'self' https://www.poscidon.com",
    "media-src 'self'",
  ]

  return `${directives.join('; ')};`
}
