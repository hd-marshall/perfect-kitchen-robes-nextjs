import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImageProps {
  src: string;
  alt: string;
  type: string;
  description: string;
  link: string;
}

interface GridGalleryProps {
  images: ImageProps[];
}

const GridGallery: React.FC<GridGalleryProps> = ({ images }) => {
  return (
    <div className="container mx-auto px-4 py-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Link
            href={image.link}
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative group"
          >
            <div className="relative h-96">
              <Image
                className="object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={index < 4} // Load first 4 images with priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4 text-center group-hover:bg-opacity-60 transition-all duration-300 rounded-lg">
                <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-md">{image.type}</h3>
                <p className="text-white text-base drop-shadow-md">{image.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GridGallery;