import { Metadata } from 'next';
import HalfHorizontalHero from '@/components/HalfHorizontalHero';
import ServiceFeatures from '@/components/pages/ServicesFeatures';
import { vanityGalleryImages } from '@/data/galleryImages';

export const metadata: Metadata = {
  title: "Custom Bathroom Vanities Melbourne | Perfect Kitchen Robes",
  description: "Stylish and functional bathroom vanities tailored to your space. Expert design and installation across Melbourne.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/vanities'
  }
};

export default function VanityServicesPage() {
  return (
    <main>
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
        galleryImages={vanityGalleryImages}
        galleryTitle="Our Vanity Collection"
      />
    </main>
  );
}