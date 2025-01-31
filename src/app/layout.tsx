import './globals.css';
import localFont from 'next/font/local';
import { Metadata } from 'next';
import Script from 'next/script';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import Divider from './components/Divider';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { headers } from 'next/headers';

config.autoAddCss = false;

const proximaNova = localFont({
  src: [{ path: 'ProximaNovaRegular.otf' }],
  variable: '--font-proximaNova',
});

const proximaNovaExtraBold = localFont({
  src: [{ path: 'ProximaNovaBold.otf' }],
  variable: '--font-proximaNovaBold',
});

const proximaNovaSemiBold = localFont({
  src: [{ path: 'ProximaNovaSemibold.otf' }],
  variable: '--font-proximaNovaSemiBold',
});

const proximaNovaItalic = localFont({
  src: [{ path: 'ProximaNovaRegularItalic.otf' }],
  variable: '--font-proximaNovaItalic',
});

const url = new URL('https://www.poscidondao.com');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Revolutionizing Personalized Medicine Research Funding',
  description: `PoSciDonDAO streamlines and democratizes the funding process of personalized medicine research. Become part of the change that science needs!`,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
  icons: [
    { rel: 'icon', url: `${url}favicon.ico` },
    { rel: 'icon', url: `${url}favicon-16x16.png` },
    { rel: 'icon', url: `${url}favicon-32x32.png` },
    { rel: 'apple-touch-icon', url: `${url}apple-touch-icon.png` },
    { rel: 'android-chrome-192x192', url: `${url}android-chrome-192x192.png` },
    { rel: 'android-chrome-512x512', url: `${url}android-chrome-512x512.png` },
  ],
  manifest: `${url}manifest.json`,
};

const GMT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? '';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = headers().get('x-content-nonce') || undefined;
  return (
    <html lang="en">
      <head>
        <Script
          nonce={nonce}
          id="anti-clickjacking script"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.top !== window.self) {
                window.top.location = window.self.location;
              }
            `,
          }}
        />
        <Script
          nonce={nonce}
          id="google-analytics-tag"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${GMT_ID}`}
        />
        <Script nonce={nonce} id="google-analytics-code" strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GMT_ID}', {
        page_path: window.location.pathname,
        });
      `}
        </Script>
        <Script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
          nonce={nonce}
        />
      </head>
      <body
        className={`            bg-seaBlue-1050
            text-gray-300
            ${proximaNova.variable}  
            ${proximaNovaExtraBold.variable}  
            ${proximaNovaSemiBold.variable}  
            ${proximaNovaItalic.variable}  
            mx-auto
            w-[95%]
            font-proxima 
            sm:w-[90%] 
            xl+:w-[80%]
             `}
      >
        <NavBar />
        {children}
        <div className="w-full">
          <Divider />
          <Footer isNavBar={false} setIsOpen={false} />

          <div
            className=" 
                  flex 
                  h-20
                  items-center
                  justify-center
                  text-sm
                  text-gray-300 sm:text-base
                  "
          >
            © PoSciDonDAO Foundation. All rights reserved.
          </div>
          <div
            className=" 
                  whitespace-wrap mb-8 flex flex-col
                  items-center
                  justify-center
                  text-center
                  text-sm
                  text-gray-300
                  sm:text-base md:flex-row
                  "
          >
            PoSciDonDAO Token (SCI) contract address on Base:&nbsp;
            <Link
              className="text-steelBlue"
              target="_blank"
              rel="noopener noreferrer"
              href="https://basescan.org/token/0x25E0A7767d03461EaF88b47cd9853722Fe05DFD3"
            >
              0x25E0A7767d03461EaF88b47cd9853722Fe05DFD3{' '}
              <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
