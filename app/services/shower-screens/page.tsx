import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import ServiceFeatures from '@/components/services/ServicesFeatures';
import MasonryGallery from '@/components/services/MasonryGallery';
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import ContactForm from '@/components/shared/ContactForm';

import { showerScreenGalleryImages, brandsUsedImages } from '@/data/services-images';

export const metadata: Metadata = {
  title: "Premium Shower Screens Melbourne | Perfect Kitchen Robes",
  description: "Elegant shower screens to enhance your bathroom. Quality materials and expert installation across Melbourne.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/shower-screens'
  }
};

export default function ShowerScreenServicesPage() {
  return (
    <main className='bg-white'>
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
      />
      <MasonryGallery title='Our Shower Screen Installations' images={showerScreenGalleryImages} />

      <MovingSlideShow images={brandsUsedImages} />

      <ContactForm />
    </main>
  );
}