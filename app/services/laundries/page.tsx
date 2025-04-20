import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import ServiceFeatures from '@/components/services/ServicesFeatures';
import MasonryGallery from '@/components/services/MasonryGallery';
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import ContactForm from '@/components/shared/ContactForm';

import { laundryGalleryImages, brandsUsedImages } from '@/data/services-images';

export const metadata: Metadata = {
  title: "Custom Laundry Renovations Melbourne | Perfect Kitchen Robes",
  description: "Transform your laundry into a functional, efficient space. Expert design and installation services across Melbourne.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/laundries'
  }
};

export default function LaundryServicesPage() {
  return (
    <main className='bg-white'>
      <HalfHorizontalHero
        imagePath="/assets/images/laundries/laundries-hero-page.webp"
        text="Laundries"
      />
      <ServiceFeatures
        serviceTitle="Our Laundry Solutions"
        serviceDescription="Turn your laundry into a functional, organised space that makes daily chores more efficient and even enjoyable."
        features={[
          {
            title: "Smart Design",
            description: "Clever layouts that maximise efficiency in even the most compact spaces."
          },
          {
            title: "Moisture-Resistant Materials",
            description: "Australian-tested materials that stand up to our humid conditions and frequent use."
          },
          {
            title: "Integrated Solutions",
            description: "Seamless integration of appliances, sinks, and storage for a polished look."
          }
        ]}
      />
      <MasonryGallery title='Our Laundry Projects' images={laundryGalleryImages} />

      <MovingSlideShow images={brandsUsedImages} />

      <ContactForm />
    </main>
  );
}