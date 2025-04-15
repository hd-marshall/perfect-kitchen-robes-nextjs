import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
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
        <link 
          rel="sitemap" 
          type="application/xml" 
          href="https://www.perfectkitchenrobes.com/sitemap.xml" 
        />
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
              'telephone': '0433537057',
              'url': 'https://www.perfectkitchenrobes.com/',
              'image': 'https://www.perfectkitchenrobes.com/assets/logo-white.svg',
              'priceRange': '$$',
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
        <Navbar />
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
        <ContactForm/>
        <Footer />
      </body>
    </html>
  );
}