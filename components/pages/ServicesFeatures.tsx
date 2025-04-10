'use client';
import React from 'react';
import MasonryGallery from './MasonryGallery';
import MovingSlideShow from '../MovingSlideShow';

// Brand images
const coolingBrothersImage = "/assets/images/brands-used/slideshow-coolingBrothers.webp";
const nikpolImage = "/assets/images/brands-used/slideshow-nikpol.webp";
const pivotechImage = "/assets/images/brands-used/slideshow-pivotech.webp";
const polytecImage = "/assets/images/brands-used/slideshow-polytec.webp";
const dorsetImage = "/assets/images/brands-used/slideshow-dorset.webp";

interface ServiceFeature {
  title: string;
  description: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface ServiceFeaturesProps {
  serviceTitle: string;
  serviceDescription: string;
  features: ServiceFeature[];
  galleryImages: GalleryImage[];
  galleryTitle?: string;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
  serviceTitle,
  serviceDescription,
  features,
  galleryImages,
  galleryTitle = "Our Recent Projects"
}) => {
  // Brand images for the MovingSlideShow component
  const brandImagesStrings = [
    coolingBrothersImage,
    nikpolImage,
    pivotechImage,
    polytecImage,
    dorsetImage
  ];
  
  return (
    <section className="w-full mx-auto py-16 bg-white">
      {/* Features Section */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-5xl md:text-5xl font-bold mb-6 text-gray-800"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
          }}>
          {serviceTitle}
        </h2>
        <p className="text-lg text-black mb-12">
          {serviceDescription}
        </p>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-zinc-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gallery Section */}
      <div className="mt-16 mb-8">
        <h2 className="text-5xl font-bold mb-8 text-center text-gray-800"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
          }}>
          {galleryTitle}
        </h2>
        <MasonryGallery images={galleryImages} />
      </div>
      
      {/* Brands Section */}
      <MovingSlideShow images={brandImagesStrings} />
    </section>
  );
};

export default ServiceFeatures;