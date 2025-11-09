import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Script from 'next/script';

import CookiebotListener from '../components/CookiebotListener';
import siteUrl from '~/utils/siteUrl';
import "~/public/main-assets/css/fonts.css";
const defaultTitle = 'Task-in Services | Global Marine & LSE Experts';
const defaultDescription =
  'Task-in Services delivers certified marine safety, fire-fighting and life-saving equipment support across Europe and the United States with 24/7 rapid response teams.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Task-in Services',
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: 'Task-in Services',
    images: [
      {
        url: `${siteUrl}/main-assets/img/logo-white.svg`,
        width: 600,
        height: 315,
        alt: 'Task-in Services - Marine Safety Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/main-assets/img/logo-white.svg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/main-assets/image/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/main-assets/image/favicon.svg" />
        <link rel="shortcut icon" href="/main-assets/image/favicon.svg" />
        <style>{`
          #CookiebotWidget, .CookiebotWidget { display: none !important; }
          .cookie-declaration-btn { display: none !important; }
        `}</style>
      </head>
      <body>
        <CookiebotListener />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="3a7e469b-0b03-4083-ae65-1df1968190c4"
          data-blockingmode="auto"
          data-culture="EN"
          data-widget-enabled="false"
          type="text/javascript"
          strategy="lazyOnload"
        />
        {children}
      </body>
    </html>
  );
}
