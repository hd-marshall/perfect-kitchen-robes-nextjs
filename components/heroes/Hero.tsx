'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  imagePath: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

export default function Hero({
  imagePath,
  title,
  text,
  buttonText,
  buttonLink
}: HeroProps) {
  const arrowImage = "/assets/images/home/arrow.webp";
  return (
    <div className="relative h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
          {text}
        </p>
        <Link 
          href="#contact-form" 
          scroll={false} 
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('contact-form');
            if (element) {
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - 100;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }}
        >
          <Button
            intent="primary"
            size="lg"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
      
      <div className="absolute bottom-10 right-0 md:bottom-4 lg:right-16 lg:bottom-4 md:right-16 z-10">
        <Image
          src={arrowImage}
          alt="Arrow"
          width={150}
          height={200}
          className="transform
           rotate-180
           w-10 md:w-10 lg:w-12
           object-contain"
        />
      </div>
    </div>
  );
}