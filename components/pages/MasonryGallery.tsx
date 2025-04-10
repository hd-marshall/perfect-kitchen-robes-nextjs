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
  // Ensure we have at least 12 images (or use what we have)
  const displayImages = images.slice(0, Math.min(images.length, 12));
  
  // Create four arrays of images for our columns
  const column1 = [displayImages[0], displayImages[1], displayImages[2]].filter(Boolean);
  const column2 = [displayImages[3], displayImages[4], displayImages[5]].filter(Boolean);
  const column3 = [displayImages[6], displayImages[7], displayImages[8]].filter(Boolean);
  const column4 = [displayImages[9], displayImages[10], displayImages[11]].filter(Boolean);

  return (
    <div className={`container mx-auto px-4 py-12 ${bgColor}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div className="grid gap-4">
          {column1.map((image, index) => (
            <div key={`image-col1-${index}`}>
              <Image
                className="h-auto w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        
        {/* Column 2 */}
        <div className="grid gap-4">
          {column2.map((image, index) => (
            <div key={`image-col2-${index}`}>
              <Image
                className="h-auto w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        
        {/* Column 3 */}
        <div className="grid gap-4">
          {column3.map((image, index) => (
            <div key={`image-col3-${index}`}>
              <Image
                className="h-auto w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        
        {/* Column 4 */}
        <div className="grid gap-4">
          {column4.map((image, index) => (
            <div key={`image-col4-${index}`}>
              <Image
                className="h-auto w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasonryGallery;