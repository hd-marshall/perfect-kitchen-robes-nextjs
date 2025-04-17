import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/HalfHorizontalHero';

import ServiceFeatures from '@/components/pages/ServicesFeatures';
import { slidingDoorGalleryImages } from '@/data/galleryImages';

import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Custom Sliding Door Solutions Melbourne | Perfect Kitchen Robes",
  description: "Space-saving sliding door systems for modern homes. Expert design and installation across Melbourne.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/sliding-doors'
  }
};

export default function SlidingDoorServicesPage() {
  return (
    <main>
      <HalfHorizontalHero
        imagePath="/assets/images/sliding-doors/sliding-doors-hero-page.webp"
        text="Sliding Doors"
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
        galleryImages={slidingDoorGalleryImages}
        galleryTitle="Our Sliding Door Projects"
      />
      <ContactForm />
    </main>
  );
}