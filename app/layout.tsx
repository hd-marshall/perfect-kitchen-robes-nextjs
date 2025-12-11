import React from 'react';
import type { Metadata } from 'next'
import Script from 'next/script';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Navigation from '@/components/shared/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import Footer from '@/components/shared/Footer';

import '@/app/globals.css';
import { nunito } from './fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.perfectkitchenrobes.com'),
  title: 'Perfect Kitchen & Robes | Custom Kitchen & Wardrobe Solutions Melbourne',
  description: 'Melbourne\'s premier kitchen and wardrobe specialists with over 35+ years experience. Custom designed kitchens, wardrobes, vanities, and more built to last.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Perfect Kitchen & Robes | Custom Kitchen Solutions Melbourne',
    description: 'Melbourne\'s premier kitchen and wardrobe specialists with over 35+ years experience.',
    url: 'https://www.perfectkitchenrobes.com',
    siteName: 'Perfect Kitchen & Robes',
    images: [
      {
        url: 'https://www.perfectkitchenrobes.com/assets/images/home/hero-home.jpeg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_AU',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* google tag manager - head (script) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TQ2S3PJS');`
          }}
        />
        {/* google search site map */}
        <link 
          rel="sitemap" 
          type="application/xml" 
          href="https://www.perfectkitchenrobes.com/sitemap.xml" 
        />
        {/* google search console rich text */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              'name': 'Perfect Kitchen & Robes',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '57 Capital Link Drive',
                'addressLocality': 'CAMPBELLFIELD',
                'addressRegion': 'VIC',
                'postalCode': '3061',
                'addressCountry': 'AU'
              },
              'telephone': '0393577204',
              'url': 'https://www.perfectkitchenrobes.com/',
              'image': [
                'https://www.perfectkitchenrobes.com/favicon-32x32.png',
                'https://www.perfectkitchenrobes.com/android-chrome-192x192.png',
                'https://www.perfectkitchenrobes.com/assets/images/home/hero-home.jpeg'
              ],
              'logo': 'https://www.perfectkitchenrobes.com/favicon-32x32.png',
              'priceRange': '$$',
              'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '5.0',
                'reviewCount': '22'
              },
              'openingHoursSpecification': [
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                  'opens': '09:00',
                  'closes': '15:30'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': 'Friday',
                  'opens': '09:00',
                  'closes': '13:30'
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-nunito">
        {/* google tag manager - body (script) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQ2S3PJS"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        <Navigation />
        {/* google search console internal linking and backlinks */}
        <Breadcrumbs />
        <main>
          {children}
          {/* vercel speed statistics */}
          <SpeedInsights />
          {/* traffic speed statistics */}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}