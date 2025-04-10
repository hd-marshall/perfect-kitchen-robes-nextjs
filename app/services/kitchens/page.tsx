import { Metadata } from 'next';
import HalfHorizontalHero from '@/components/HalfHorizontalHero';
import ServiceFeatures from '@/components/pages/ServicesFeatures';
import { kitchenGalleryImages } from '@/data/galleryImages';

export const metadata: Metadata = {
  title: "Custom Kitchen Designs Melbourne | Perfect Kitchen Robes",
  description: "Bespoke kitchens tailored to your style and functionality needs. Expert design and installation across Melbourne.",
};

// Add placeholder images for kitchen gallery
const placeholderKitchenImages = [
  { 
    src: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?q=80&w=1000", 
    alt: "Modern kitchen with island and pendant lights" 
  },
  { 
    src: "https://images.unsplash.com/photo-1600607687644-c7f34c52d351?q=80&w=1000", 
    alt: "White kitchen with marble countertop" 
  },
  { 
    src: "https://images.unsplash.com/photo-1594643469650-dd506331ff75?q=80&w=1000", 
    alt: "Kitchen with wooden cabinets and stainless appliances" 
  },
  { 
    src: "https://images.unsplash.com/photo-1591992403869-81c5657149ab?q=80&w=1000", 
    alt: "Contemporary kitchen with black fixtures" 
  },
  { 
    src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1000", 
    alt: "Kitchen with breakfast bar and natural lighting" 
  },
  { 
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000", 
    alt: "Luxury kitchen with high-end appliances" 
  },
  { 
    src: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=1000", 
    alt: "Scandinavian-style kitchen with minimalist design" 
  },
  { 
    src: "https://images.unsplash.com/photo-1570739977461-4c99d19e11a7?q=80&w=1000", 
    alt: "Open concept kitchen with dining area" 
  },
  { 
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1000", 
    alt: "Kitchen with custom cabinetry and pendant lighting" 
  },
  { 
    src: "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=1000", 
    alt: "Modern farmhouse kitchen with apron sink" 
  },
  { 
    src: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=1000", 
    alt: "Kitchen with butler's pantry and custom storage" 
  },
  { 
    src: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1000", 
    alt: "Elegant kitchen with natural stone and brass accents" 
  },
];

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
        galleryImages={placeholderKitchenImages}
        galleryTitle="Our Kitchen Portfolio"
      />
    </main>
  );
}