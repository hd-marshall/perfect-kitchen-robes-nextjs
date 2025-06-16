import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import SectionTitle from '@/components/ui/SectionTitle';
import MasonryGallery from '@/components/services/MasonryGallery';
import MaterialsFeatures from '@/components/services/MaterialsFeatures';
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import ContactForm from '@/components/shared/ContactForm';
import FAQ from '@/components/shared/FAQ';

import { showerScreenGalleryImages, brandsUsedImages } from '@/data/services-images';
import { showerScreenServiceFeatures } from '@/data/materials-features'
import { showerScreenFAQs } from '@/data/faq-data'

export const metadata: Metadata = {
  title: "Custom Shower Screens Melbourne | Installation | Perfect Kitchen & Robes",
  description: "Enhance your bathroom with modern, high-quality shower screens from Perfect Kitchen & Robes. Expert measurement & installation across Melbourne.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/shower-screens'
  }
};

export default function ShowerScreenServicesPage() {
  return (
    <main className='bg-white'>
      <HalfHorizontalHero
        imagePath="/assets/images/shower-screens/shower-screens-hero-page.webp"
        text="Custom Shower Screens Melbourne"
      />

      <div className='pt-8 bg-zinc-800'>
        <SectionTitle 
          title="Quality Hardware and Finishes"
          subtitle="The details matter. We complement our quality glass panels with durable hardware and fittings designed for wet areas. <br /> <br /> Choose from hinges, handles, and framing (where applicable) in a variety of finishes to perfectly match your bathroom's tapware and accessories – popular choices include polished chrome, sophisticated matte black, elegant brushed nickel, and warm brushed gold. <br /> <br /> Our components are selected for smooth operation and longevity."
          textColor='text-white'
          backgroundColor='bg-zinc-800'
        />
      </div>

      <MasonryGallery 
        title='Our Shower Screen Installations' 
        images={showerScreenGalleryImages} 
      />

      <div className='pt-8 bg-[#F5F5F5]'>
        <SectionTitle 
          title="Why Expert Installation is Crucial"
          subtitle="Achieving a truly watertight seal and ensuring the longevity and safety of your shower screen hinges on professional installation. Our experienced Melbourne-based team takes precise measurements before ordering your custom-sized screen. <br /> <br /> This ensures a perfect fit, especially critical for frameless and semi-frameless designs. We use quality sealants and expert techniques during installation to prevent leaks, ensure smooth door operation (if applicable), and guarantee your screen is securely fitted according to Australian standards."
          textColor='text-black'
          backgroundColor='bg-[#F5F5F5]'
        />
      </div>

      <MaterialsFeatures {...showerScreenServiceFeatures} />

      <MovingSlideShow 
        images={brandsUsedImages} 
      />

      <ContactForm />

      <FAQ 
        faqData={showerScreenFAQs} 
        title="Frequently Asked Questions" 
      />
    </main>
  );
}