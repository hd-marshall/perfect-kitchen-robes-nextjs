import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // If you have a footer component
import ContactForm from '@/components/ContactForm';
import '@/app/globals.css'; // Your global styles

import { nunito } from './fonts'

export const metadata = {
  title: 'Perfect Kitchen Robes | Custom Kitchens, Wardrobes & Interiors Melbourne',
  description: 'Transform your home with bespoke kitchens, wardrobes, sliding doors and vanities crafted by experts in Melbourne. Request a quote today!',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

function localFont(arg0: { src: { path: string; weight: string; style: string; }[]; variable: string; display: string; }) {
  throw new Error('Function not implemented.');
}
