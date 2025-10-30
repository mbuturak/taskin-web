

'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useEffect } from 'react';
import Script from 'next/script';

import "~/public/main-assets/css/fonts.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Cookiebot'u yükle
    if (typeof window !== 'undefined') {
      window.addEventListener('CookiebotOnAccept', () => {
        // Kullanıcı çerezleri kabul ettiğinde çalışacak kod
        if (window.Cookiebot && window.Cookiebot.consent) {
          if (window.Cookiebot.consent.marketing) {
            // Marketing çerezleri kabul edildi
          }
          if (window.Cookiebot.consent.statistics) {
            // İstatistik çerezleri kabul edildi
          }
        }
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Taskin Services</title>
        <meta name="description" content="Taskin Services" />
        <link rel="icon" type="image/png" sizes="32x32" href="/main-assets/image/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/main-assets/image/favicon.svg" />
        <link rel="shortcut icon" href="/main-assets/image/favicon.svg" />
      </head>
      <body>
        {/* Cookiebot Script - Client-side only */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="3a7e469b-0b03-4083-ae65-1df1968190c4"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="lazyOnload"
        />
        {children}
      </body>
    </html>
  );
}
