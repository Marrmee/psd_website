import './globals.css';
import localFont from 'next/font/local';
import { Metadata } from 'next';
import Script from 'next/script';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import Divider from './components/Divider';
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
  return (
    <html lang="en">
      {/* <Script
        id="font-awesome"
        src="https://kit.fontawesome.com/bfd0659090.js"
        crossOrigin="anonymous"
      /> */}
      <Script
        id="google-analytics-tag"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GMT_ID}`}
      />
      <Script id="google-analytics-code" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GMT_ID}', {
        page_path: window.location.pathname,
        });
      `}
      </Script>
      <body
        className={`
            bg-seaBlue-1050
            text-gray-300
            ${proximaNova.variable}  
            ${proximaNovaExtraBold.variable}  
            ${proximaNovaSemiBold.variable}  
            ${proximaNovaItalic.variable}  
            mx-auto
            w-[95%]
            sm:w-[90%] 
            font-proxima 
            xl+:w-[80%]
             `}
      >
        <NavBar />
        {children}
        <div className="w-full">
          <Divider />
          <Footer />
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
        </div>
      </body>
    </html>
  );
}
