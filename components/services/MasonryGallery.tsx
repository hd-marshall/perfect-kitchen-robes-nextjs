'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';

interface GalleryImage {
  src: string;
  alt: string;
}

interface ResponsiveGalleryProps {
  images: GalleryImage[];
  bgColor?: string;
  title?: string;
}

export default function ResponsiveGallery({
  images,
  bgColor = "bg-white",
  title = "Our Recent Projects"
}: ResponsiveGalleryProps) {
  // Ensure we have at most 6 images
  const displayImages = images.slice(0, Math.min(images.length, 6));
  
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  
  // Check screen size when component mounts and when window resizes
  useEffect(() => {
    const checkScreenSize = () => {
      // iPad typical width is ~768px, so we'll use that as our breakpoint
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Carousel navigation
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === displayImages.length - 1 ? 0 : prevSlide + 1
    );
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? displayImages.length - 1 : prevSlide - 1
    );
  };
  
  // Distribute images for masonry layout
  const distributeImages = () => {
    const totalImages = displayImages.length;
    
    // If 1-2 images, put in first column
    if (totalImages <= 2) {
      return {
        column1: displayImages,
        column2: []
      };
    }
    
    // If 3-4 images, distribute more evenly
    if (totalImages <= 4) {
      const midPoint = Math.ceil(totalImages / 2);
      return {
        column1: displayImages.slice(0, midPoint),
        column2: displayImages.slice(midPoint)
      };
    }
    
    // For 5-6 images, use original distribution
    return {
      column1: [displayImages[0], displayImages[1], displayImages[2]],
      column2: [displayImages[3], displayImages[4], displayImages[5]]
    };
  };
  
  const { column1, column2 } = distributeImages();
  
  // Carousel layout for mobile/tablet
  if (isMobileOrTablet) {
    return (
      <section className={`pb-8 ${bgColor}`}>
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={title}
            textColor="text-black"
            backgroundColor={bgColor}
          />
          <div className="pb-4">
            <div className="relative h-[60vh]">
              {/* Carousel slides */}
              <div className="h-full overflow-hidden rounded-lg relative">
                {displayImages.map((image, index) => (
                  <div 
                    key={`carousel-slide-${index}`}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        className="w-full h-full rounded-lg"
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        priority={index === currentSlide}
                        style={{ objectFit: 'cover' }}
                      />
                      {/* Added overlay with 30% opacity */}
                      <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation buttons */}
              <button
                onClick={goToPrevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-white p-2 rounded-full shadow-lg border-2 border-black"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-white p-2 rounded-full shadow-lg border-2 border-black"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {displayImages.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Original masonry layout for desktop
  return (
    <section className={`pb-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={title}
          textColor="text-black"
          backgroundColor={bgColor}
        />
        <div className="pb-4">
          <div className={`grid ${column2.length > 0 ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
            {/* Column 1 */}
            <div className="grid gap-4">
              {column1.map((image, index) => (
                <div
                  key={`image-col1-${index}`}
                  className="h-[65vh] overflow-hidden rounded-lg relative"
                >
                  <Image
                    className="w-full h-full rounded-lg"
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Added overlay with 30% opacity */}
                  <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
                </div>
              ))}
            </div>
            
            {/* Column 2 (if exists) */}
            {column2.length > 0 && (
              <div className="grid gap-4">
                {column2.map((image, index) => (
                  <div
                    key={`image-col2-${index}`}
                    className="h-[65vh] overflow-hidden rounded-lg relative"
                  >
                    <Image
                      className="w-full h-full rounded-lg"
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={400}
                      style={{ objectFit: 'cover' }}
                    />
                    {/* Added overlay with 30% opacity */}
                    <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}