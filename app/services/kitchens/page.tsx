import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/HalfHorizontalHero';

import ServiceFeatures from '@/components/pages/ServicesFeatures';
import { kitchenGalleryImages } from '@/data/galleryImages';

import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Custom Kitchen Designs Melbourne | Perfect Kitchen Robes",
  description: "Bespoke kitchens tailored to your style and functionality needs. Expert design and installation across Melbourne.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/kitchens'
  }
};

export default function KitchenServicesPage() {
  return (
    <main>
      <HalfHorizontalHero
        imagePath="/assets/images/kitchens/kitchens-hero-page.webp"
        text="Kitchens"
      />
      <ServiceFeatures
        serviceTitle="Our Kitchen Design Services"
        serviceDescription="From contemporary minimalist designs to classic traditional layouts, we craft kitchens that reflect your unique style and meet your specific needs."
        features={[
          {
            title: "Custom Design",
            description: "Personalised kitchen layouts tailored to your space and lifestyle."
          },
          {
            title: "Premium Materials",
            description: "High-quality, durable materials sourced from the best Australian suppliers."
          },
          {
            title: "Expert Installation",
            description: "Precision installation by our skilled and experienced local team."
          }
        ]}
        galleryImages={kitchenGalleryImages}
        galleryTitle="Our Kitchen Portfolio"
      />
      <ContactForm />
    </main>
  );
}