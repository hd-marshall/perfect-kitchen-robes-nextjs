// ImageCarouselServer.tsx (Server Component)
import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { ClientImageCarousel } from './ClientImageCarousel';

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

// Server component that handles data fetching and initial render
const ImageCarouselServer: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div className="bg-zinc-900 w-full pb-12">
      <SectionTitle 
        title="Our Work" 
        textColor='text-white'
        backgroundColor='bg-zinc-900'
      />
      
      {/* Pass the images to the client component */}
      <ClientImageCarousel images={images} />
    </div>
  );
};

export default ImageCarouselServer;