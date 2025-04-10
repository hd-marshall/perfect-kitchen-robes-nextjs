"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HalfHeroProps {
  images?: string[];
}

const HalfHero: React.FC<HalfHeroProps> = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  
  // Auto-rotate carousel images
  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="relative h-[70vh] flex flex-col md:flex-row pt-4">
      {/* Left half - Text content */}
      <div className="w-full md:w-1/2 bg-zinc-800 relative flex items-center">
        {/* Text content */}
        <div className="relative z-10 px-6 md:px-16 py-12 md:py-0">
          <h2
            className="text-white font-nunito font-bold text-4xl md:text-5xl mb-6"
            style={{
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)',
            }}
          >
            About Us
          </h2>
          <p className="text-white text-base mb-4">
            We craft beautiful kitchens, wardrobes, vanities and much more, bringing expertise and quality craftsmanship to homes across Melbourne. <br></br> <br></br> Transform your space with our custom design solutions.
          </p>
          <Link 
          href="/about" 
          className="inline-block"
          >
            <button
              className="py-3 px-8 bg-white text-black font-normal rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#c9c5b1] hover:text-white hover:shadow-md"
            >
              Learn More
            </button>
          </Link>  
        </div>
      </div>
      
      {/* Right half - Carousel */}
      <div className="w-full md:w-1/2 h-full overflow-hidden relative">
        {/* Carousel container */}
        <div className="h-full w-full relative">
          {images.map((brand, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${brand})`,
              }}
            />
          ))}
          
          {/* Fallback if no images provided */}
          {images.length === 0 && (
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(/api/placeholder/800/600)`,
              }}
            />
          )}
          
          {/* Removed carousel indicators */}
        </div>
      </div>
    </div>
  );
};

export default HalfHero;