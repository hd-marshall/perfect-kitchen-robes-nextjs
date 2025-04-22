import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import ServiceFeatures from '@/components/services/ServicesFeatures';
import MasonryGallery from '@/components/services/MasonryGallery';
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import ContactForm from '@/components/shared/ContactForm';

import { slidingDoorGalleryImages, brandsUsedImages } from '@/data/services-images';

export const metadata: Metadata = {
  title: "Custom Sliding Doors Melbourne | Wardrobes & Rooms | Perfect Kitchen & Robes",
  description: "Stylish & space-saving sliding doors for wardrobes & rooms in Melbourne. Expert design & installation by Perfect Kitchen & Robes. Explore options.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/sliding-doors'
  }
};

export default function SlidingDoorServicesPage() {
  return (
    <main className='bg-white'>
      <HalfHorizontalHero
        imagePath="/assets/images/sliding-doors/sliding-doors-hero-page.webp"
        text="Custom Sliding Door Solutions Melbourne"
      />
      <ServiceFeatures
        serviceTitle="Our Sliding Door Solutions"
        serviceDescription="Create flexible, space-saving room divisions with our custom sliding door systems designed for modern Australian homes."
        features={[
          {
            title: "Space Optimisation",
            description: "Save valuable floor space with doors that glide rather than swing open."
          },
          {
            title: "Acoustic Performance",
            description: "Quality seals and panels that help reduce noise transfer between spaces."
          },
          {
            title: "Custom Styling",
            description: "Wide range of glass, timber and finish options to complement your interior décor."
          }
        ]}
      />
      <MasonryGallery title='Our Sliding Door Projects' images={slidingDoorGalleryImages} />

      <MovingSlideShow images={brandsUsedImages} />

      <ContactForm />
    </main>
  );
}