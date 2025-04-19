"use client";

import React, { useState, useEffect } from 'react';

interface ImageData {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface CarouselProps {
  images: ImageData[];
}

const HeroCarousel: React.FC<CarouselProps> = ({ images = [] }) => {
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
    <div className="h-full w-full relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
          aria-label={image.alt}
        />
      ))}
    </div>
  );
};

export default HeroCarousel;