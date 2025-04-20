import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import ServiceFeatures from '@/components/services/ServicesFeatures';
import MasonryGallery from '@/components/services/MasonryGallery';
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import ContactForm from '@/components/shared/ContactForm';

import { wardrobeGalleryImages, brandsUsedImages } from '@/data/services-images';

export const metadata: Metadata = {
  title: "Bespoke Wardrobe Solutions Melbourne | Perfect Kitchen Robes",
  description: "Maximise your storage space with custom wardrobes designed and installed by Perfect Kitchen Robes in Melbourne.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/wardrobes'
  }
};

export default function WardrobeServicesPage() {
  return (
    <main className='bg-white'>
      <HalfHorizontalHero
        imagePath="/assets/images/wardrobes/wardrobes-hero-page.webp"
        text="Wardrobes"
      />
      <ServiceFeatures
        serviceTitle="Our Wardrobe Solutions"
        serviceDescription="We create functional, elegant wardrobes that maximise your storage while complementing your bedroom's aesthetic."
        features={[
          {
            title: "Bespoke Storage",
            description: "Customised compartments designed around your clothing and accessories collection."
          },
          {
            title: "Quality Hardware",
            description: "Smooth-gliding doors and soft-close drawers for everyday luxury and convenience."
          },
          {
            title: "Stylish Finishes",
            description: "Contemporary finishes and detailing that elevate your bedroom's appearance."
          }
        ]}
      />
      <MasonryGallery title='Our Wardrobe Collection' images={wardrobeGalleryImages} />

      <MovingSlideShow images={brandsUsedImages} />

      <ContactForm />
    </main>
  );
}