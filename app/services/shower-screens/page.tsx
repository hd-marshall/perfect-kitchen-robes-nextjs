import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/HalfHorizontalHero';

import ServiceFeatures from '@/components/pages/ServicesFeatures';
import { showerScreenGalleryImages } from '@/data/galleryImages';

import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Premium Shower Screens Melbourne | Perfect Kitchen Robes",
  description: "Elegant shower screens to enhance your bathroom. Quality materials and expert installation across Melbourne.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/shower-screens'
  }
};

export default function ShowerScreenServicesPage() {
  return (
    <main>
      <HalfHorizontalHero
        imagePath="/assets/images/shower-screens/shower-screens-hero-page.webp"
        text="Shower Screens"
      />
      <ServiceFeatures
        serviceTitle="Our Shower Screen Options"
        serviceDescription="Enhance your bathroom with our premium shower screens, combining sleek aesthetics with practical water containment."
        features={[
          {
            title: "Frameless Elegance",
            description: "Contemporary frameless designs that create a sense of space and luxury."
          },
          {
            title: "Safety Glass",
            description: "Toughened safety glass that meets Australian standards for bathroom applications."
          },
          {
            title: "Precision Installation",
            description: "Watertight fitting by specialists to prevent leaks and ensure longevity."
          }
        ]}
        galleryImages={showerScreenGalleryImages}
        galleryTitle="Our Shower Screen Installations"
      />
      <ContactForm />
    </main>
  );
}