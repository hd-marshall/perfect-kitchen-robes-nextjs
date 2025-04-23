import { Metadata } from 'next';
import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import SectionTitle from '@/components/ui/SectionTitle';
// import ServiceFeatures from '@/components/services/ServicesFeatures';
import OurApproach from '@/components/services/OurApproach';
import MasonryGallery from '@/components/services/MasonryGallery';
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import MaterialsFeatures from '@/components/services/MaterialsFeatures';
import ContactForm from '@/components/shared/ContactForm';
import FAQ from '@/components/shared/FAQ'

import { wardrobeGalleryImages, brandsUsedImages } from '@/data/services-images';
import { wardrobeFAQs } from '@/data/faq-data';

export const metadata: Metadata = {
  title: "Custom Wardrobe Design & Installation Melbourne | Perfect Kitchen & Robes",
  description: "Beautiful, functional custom wardrobes designed & installed in Melbourne. Maximise storage with bespoke solutions from Perfect Kitchen & Robes. Get a quote.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/wardrobes'
  }
};

export default function WardrobeServicesPage() {
  return (
    <main className='bg-white'>
      <HalfHorizontalHero
        imagePath="/assets/images/wardrobes/wardrobes-hero-page.webp"
        text="Custom Wardrobes Melbourne"
      />

      <div className='pt-8 bg-zinc-800'>
        <SectionTitle 
          title="Find Your Perfect Wardrobe Style"
          subtitle="Every Melbourne home and personal style is unique, which is why we specialise in crafting wardrobes that truly fit your space and needs. <br/><br/> Whether you're dreaming of a spacious walk-in wardrobe, need a seamlessly integrated built-in wardrobe for a bedroom, or want a clever reach-in robe for a smaller room, our team has the expertise to design and install it perfectly. We excel at finding smart solutions for tricky spaces, like angled ceilings or awkward corners, ensuring every centimetre works for you."
          textColor='text-white'
          backgroundColor='bg-zinc-800'
        />
      </div>

      <OurApproach />

      <MasonryGallery title='Our Wardrobe Collection' images={wardrobeGalleryImages} />
      
      <MaterialsFeatures />
      
      <MovingSlideShow images={brandsUsedImages} />
      
      <ContactForm />

      <FAQ 
        faqData={wardrobeFAQs} 
        title="Frequently Asked Questions" 
      />
    </main>
  );
}