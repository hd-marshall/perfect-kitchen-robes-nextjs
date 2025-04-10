'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CarouselImage {
  src: string;
  alt: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeImage, setActiveImage] = useState<CarouselImage>(images[0]);

  // Update activeImage whenever currentSlide changes
  useEffect(() => {
    setActiveImage(images[currentSlide]);
  }, [currentSlide, images]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto py-8 px-4 sm:px-6 lg:px-8 md:w-[95%]">
      {/* Mobile: Container for image and content stacked vertically */}
      <div className="md:hidden">
        <div className="relative w-full overflow-hidden rounded-lg aspect-video">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Image */}
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}

          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 z-30 -translate-y-1/2 w-10 h-10 flex items-center justify-center border bg-white border-black rounded-full bg-transparent hover:bg-[#c9c5b1] hover:border-[#c9c5b1] transition-colors duration-300 group"
            aria-label="Previous slide"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              className="w-5 h-5 text-black group-hover:text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 z-30 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white border border-black rounded-full bg-transparent hover:bg-[#c9c5b1] hover:border-[#c9c5b1] transition-colors duration-300 group"
            aria-label="Next slide"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              className="w-5 h-5 text-black group-hover:text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Overlay - Now positioned BELOW the image instead of on top */}
        <div 
          key={`mobile-content-${currentSlide}`} 
          className="w-full bg-white border border-t-0 rounded-b-lg p-4"
        >
          <p className="text-gray-800 mb-4 text-base text-center">
            {activeImage.description}
          </p>
          <div className="flex justify-center">
            <Link 
              href={activeImage.buttonLink} 
              className="inline-block bg-black text-white px-6 py-2 rounded-md font-medium text-base transition-all duration-300 hover:bg-[#c9c5b1] hover:text-black hover:shadow-md"
            >
              {activeImage.buttonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: Container with overlay on image */}
      <div className="hidden md:block relative w-full overflow-hidden rounded-lg aspect-video">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image */}
            <Image 
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(max-width: 1200px) 85vw, 1200px"
            />
            
            {/* Desktop Overlay - One per slide */}
            <div className="absolute bottom-12 left-0 w-3/4 bg-white bg-opacity-90 p-6 flex flex-col items-center">
              <p className="text-gray-800 mb-4 text-base md:text-lg text-center">
                {image.description}
              </p>
              <Link 
                href={image.buttonLink} 
                className="inline-block bg-black text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 hover:bg-[#c9c5b1] hover:text-black hover:shadow-md"
              >
                {image.buttonText}
              </Link>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-4 z-30 -translate-y-1/2 w-12 h-12 flex items-center justify-center border bg-white border-black rounded-full bg-transparent hover:bg-[#c9c5b1] hover:border-[#c9c5b1] transition-colors duration-300 group"
          aria-label="Previous slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor"
            className="w-6 h-6 text-black group-hover:text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next Button */}
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-4 z-30 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white border border-black rounded-full bg-transparent hover:bg-[#c9c5b1] hover:border-[#c9c5b1] transition-colors duration-300 group"
          aria-label="Next slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor"
            className="w-6 h-6 text-black group-hover:text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;