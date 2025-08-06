import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import SectionTitle from '@/components/ui/SectionTitle';
import MasonryGallery from '@/components/services/MasonryGallery';
import MaterialsFeatures from '@/components/services/MaterialsFeatures';
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import ContactForm from '@/components/shared/ContactForm';
import FAQ from '@/components/shared/FAQ';

import { laundryGalleryImages, brandsUsedImages } from '@/data/services-images';
import { laundryServiceFeatures } from '@/data/materials-features'
import { laundryFAQs } from '@/data/faq-data'

export const metadata: Metadata = {
  title: "Custom Laundry Renovations Melbourne | Fit-Outs | Perfect Kitchen & Robes",
  description: "Create a functional & stylish laundry room with custom renovations by Perfect Kitchen & Robes in Melbourne. Smart storage solutions & quality fit-outs.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/laundries'
  }
};

export default function LaundryServicesPage() {
  return (
    <main className='bg-white'>
      <HalfHorizontalHero
        imagePath="/assets/images/laundries/laundries-hero-page.webp"
        text="Custom Laundry Renovations Melbourne"
      />

      <div className='pt-8 bg-zinc-800'>
        <SectionTitle 
          title="Transforming Your Laundry from Chore Zone <br> to Chic Space"
          subtitle="Let's face it, the laundry is one of the hardest working rooms in any Melbourne home. But functional doesn't have to mean forgotten! <br><br> We specialise in transforming laundries – big or small – into highly organised, efficient, and even stylish spaces that make managing household tasks easier. <br><br> A well-designed laundry fit-out not only improves your daily routine but also adds significant practical value to your home."
          textColor='text-white'
          backgroundColor='bg-zinc-800'
        />
      </div>

      <MasonryGallery title='Our Laundry Transformations' images={laundryGalleryImages} />

      <div className='pt-8 bg-[#F5F5F5]'>
        <SectionTitle
          title="Built Tough for Hardworking Melbourne Laundries"
          subtitle="Laundries cop a lot – moisture, heat, heavy use, and cleaning chemicals. <br><br> That's why we prioritise robust construction and materials designed specifically for these demanding environments. <br><br> We utilise high moisture-resistant (HMR) boards for all cabinetry carcasses, paired with durable, easy-to-clean finishes for doors and panels. <br><br> Our benchtops, often practical laminates or engineered stone, are selected for their resilience and water resistance, ensuring your laundry looks great and performs brilliantly for years to come, handling Melbourne's varied conditions with ease."
          textColor='text-black'
          backgroundColor='bg-[#F5F5F5]'
          />
      </div>

      <MaterialsFeatures {...laundryServiceFeatures} />

      <MovingSlideShow images={brandsUsedImages} />

      <ContactForm />

      <FAQ 
        faqData={laundryFAQs} 
        title="Frequently Asked Questions" 
      />
    </main>
  );
}