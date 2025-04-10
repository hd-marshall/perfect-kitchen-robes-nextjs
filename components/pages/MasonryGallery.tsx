'use client';
import React from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  bgColor?: string;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  bgColor = "bg-white"
}) => {
  // Ensure we have at most 6 images
  const displayImages = images.slice(0, Math.min(images.length, 6));

  // Dynamically distribute images based on total count
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

  return (
    <div className={`container mx-auto px-4 py-12 ${bgColor}`}>
      <div className={`grid ${column2.length > 0 ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
        {/* Column 1 */}
        <div className="grid gap-4">
          {column1.map((image, index) => (
            <div 
              key={`image-col1-${index}`} 
              className="h-[65vh] overflow-hidden rounded-lg"
            >
              <Image
                className="w-full h-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        
        {/* Column 2 (if exists) */}
        {column2.length > 0 && (
          <div className="grid gap-4">
            {column2.map((image, index) => (
              <div 
                key={`image-col2-${index}`} 
                className="h-[65vh] overflow-hidden rounded-lg"
              >
                <Image
                  className="w-full h-full rounded-lg"
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MasonryGallery;