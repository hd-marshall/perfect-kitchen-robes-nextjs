import React from 'react';
import Link from 'next/link';
import HeroCarousel from './ClientHalfVerticalHero';
import { Button } from '@/components/ui/Button';

// Default fallback link if none provided
const buttonLinkAlt = "/about";

// Updated interface to match our data structure
interface ImageData {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HalfHeroProps {
  images: ImageData[];
}

// Server component that can be cached
export default function HalfHero({ images = [] }: HalfHeroProps) {
  // Take first image data for static content (will be updated by client carousel)
  const firstImage = images[0] || null;
  
  return (
    <div className="relative h-[70vh] flex flex-col md:flex-row">
      {/* Left half - Text content */}
      <div className="w-full md:w-1/2 bg-zinc-800 relative flex items-center">
        {/* Text content */}
        <div className="relative z-10 px-6 md:px-16 py-12 md:py-0">
          <h2
            className="text-white font-nunito font-bold text-4xl md:text-5xl mb-6"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            {firstImage?.title}
          </h2>
          <p className="text-white text-base mb-4">
            {firstImage?.description}
          </p>
          <Link
            href={firstImage?.buttonLink || buttonLinkAlt}
            className="inline-block mt-4"
          >
            <Button
              intent="primary"
              size="md"
            >
              {firstImage?.buttonText}
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Right half - Carousel */}
      <div className="w-full md:w-1/2 h-full overflow-hidden relative">
        {/* Client component with carousel functionality */}
        <HeroCarousel images={images} />
      </div>
    </div>
  );
}