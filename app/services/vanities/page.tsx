import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import ServiceFeatures from '@/components/services/ServicesFeatures';
import MasonryGallery from '@/components/services/MasonryGallery';
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import ContactForm from '@/components/shared/ContactForm';

import { vanityGalleryImages, brandsUsedImages } from '@/data/services-images';

export const metadata: Metadata = {
  title: "Custom Bathroom Vanities Melbourne | Perfect Kitchen Robes",
  description: "Stylish and functional bathroom vanities tailored to your space. Expert design and installation across Melbourne.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/vanities'
  }
};

export default function VanityServicesPage() {
  return (
    <main className='bg-white'> 
      <HalfHorizontalHero
        imagePath="/assets/images/vanities/vanities-hero-page.webp"
        text="Vanities"
      />
      <ServiceFeatures
        serviceTitle="Our Vanity Craftsmanship"
        serviceDescription="Combine functionality with style through our custom bathroom vanities, designed to withstand Australian conditions while enhancing your daily routine."
        features={[
          {
            title: "Waterproof Construction",
            description: "Premium moisture-resistant materials perfect for our humidity and wet environments."
          },
          {
            title: "Storage Solutions",
            description: "Thoughtful organisation systems tailored to your bathroom essentials and space."
          },
          {
            title: "Designer Finishes",
            description: "Contemporary styles and finishes that complement modern Australian bathrooms."
          }
        ]}
      />
      <MasonryGallery title='Our Vanity Projects' images={vanityGalleryImages} />

      <MovingSlideShow images={brandsUsedImages} />

      <ContactForm />
    </main>
  );
}