import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from 'next/font/local'
import Script from "next/script"
import RecaptchaProvider from '@/components/recaptcha-provider';
import MinimalCaptchaBadge from '@/components/minimal-captcha-badge';
import { ANTI_CLICKJACK_SCRIPT } from '@/lib/inline-scripts'

const acumin = localFont({
  src: './AcuminProMedium.otf',
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Poscidon | Revolutionizing Personalized Medicine Research Funding",
  description:
    "The first-ever decentralized biotech organization dedicated to funding personalized medicine research for life-altering diseases.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "apple-touch-icon", url: "/apple-icon-180x180.png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Poscidon | Revolutionizing Personalized Medicine Research Funding",
    description: "The first-ever decentralized biotech organization dedicated to funding personalized medicine research for life-altering diseases.",
    url: "https://poscidon.com",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/psdlogo_white.png",
        width: 1200,
        height: 630,
        alt: "Poscidon Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poscidon | Revolutionizing Personalized Medicine Research Funding",
    description: "The first-ever decentralized biotech organization dedicated to funding personalized medicine research for life-altering diseases.",
    images: ["https://poscidon.com/twitter-card.png"],
    creator: "@PoSciDonDAO",
  },
}

export const dynamic = 'force-static'

const GMT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={acumin.className} suppressHydrationWarning>
      <head>
        <script
          id="anti-clickjacking"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: ANTI_CLICKJACK_SCRIPT,
          }}
        />
        {GMT_ID ? (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GMT_ID}`}
            strategy="afterInteractive"
          />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Poscidon",
              "url": "https://poscidon.com",
              "logo": "https://poscidon.com/psdlogo_blue.png",
              "sameAs": [
                "https://x.com/PoSciDonDAO",
                "https://www.linkedin.com/company/poscidondao",
                "https://discord.com/invite/75SrHpcNSZ",
                "https://t.me/OfficialPoSciDonDAO"
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
        <RecaptchaProvider>
          <MinimalCaptchaBadge />
          {children}
        </RecaptchaProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
