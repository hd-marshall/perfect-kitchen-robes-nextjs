import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // If you have a footer component
import ContactForm from '@/components/ContactForm';
import '@/app/globals.css'; // Your global styles

import { nunito } from './fonts'

export const metadata = {
  title: 'Perfect Kitchen Robes | Custom Kitchens, Wardrobes & Interiors Melbourne',
  description: 'Transform your home with bespoke kitchens, wardrobes, sliding doors and vanities crafted by experts in Melbourne. Request a quote today!',
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
