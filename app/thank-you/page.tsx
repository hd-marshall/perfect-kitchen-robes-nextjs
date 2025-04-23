import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Perfect Kitchen & Robes',
  description: 'Thank you for your enquiry with Perfect Kitchen & Robes. We\'ve received your message and will be in touch shortly to discuss your kitchen and wardrobe needs.',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/thank-you',
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-800 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white">
          Thank You
        </h1>
        <p className="text-xl md:text-2xl text-white mb-6">
          From the crew of Perfect Kitchen & Robes
        </p>
        
        <p className="text-lg md:text-xl text-white mb-8 mx-auto w-[90%] md:w-[70%]">
          We've received your enquiry and will be in touch shortly. We look forward to helping you transform your space.
        </p>
        
        <div>
          <Link href="/">
            <Button 
              intent="primary" 
              size="lg"
            >
              Return to Home
            </Button>
          </Link>
        </div>
    </div>
  );
}