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
  
  // Create two arrays of images for our columns
  const column1 = [displayImages[0], displayImages[1], displayImages[2]].filter(Boolean);
  const column2 = [displayImages[3], displayImages[4], displayImages[5]].filter(Boolean);

  return (
    <div className={`container mx-auto px-4 py-12 ${bgColor}`}>
      <div className="grid grid-cols-2 gap-4">
        {/* Column 1 */}
        <div className="grid gap-4">
          {column1.map((image, index) => (
            <div key={`image-col1-${index}`} className="h-[65vh] overflow-hidden rounded-lg">
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
        {/* Column 2 */}
        <div className="grid gap-4">
          {column2.map((image, index) => (
            <div key={`image-col2-${index}`} className="h-[65vh] overflow-hidden rounded-lg">
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
      </div>
    </div>
  );
};

export default MasonryGallery;