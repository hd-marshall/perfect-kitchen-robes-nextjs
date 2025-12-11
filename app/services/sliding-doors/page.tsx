import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import SectionTitle from '@/components/ui/SectionTitle';
import MasonryGallery from '@/components/services/MasonryGallery';
import MaterialsFeatures from '@/components/services/MaterialsFeatures'
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import ElfsightGoogleReviews from '@/components/shared/ElfShiftReviews';
import ContactForm from '@/components/shared/ContactForm';
import FAQ from '@/components/shared/FAQ';

import { slidingDoorGalleryImages, brandsUsedImages } from '@/data/services-images';
import { slidingDoorsServiceFeatures } from '@/data/materials-features'
import { slidingDoorFAQs } from '@/data/faq-data';

export const metadata: Metadata = {
  title: "Custom Sliding Doors Melbourne | Wardrobes & Rooms | Perfect Kitchen & Robes",
  description: "Stylish & space-saving sliding doors for wardrobes & rooms in Melbourne. Expert design & installation by Perfect Kitchen & Robes. Explore options.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/sliding-doors'
  }
};

export default function SlidingDoorServicesPage() {
  return (
    <main className='bg-white'>
      <HalfHorizontalHero
        imagePath="/assets/images/sliding-doors/sliding-doors-hero-page.webp"
        text="Custom Sliding Door Solutions Melbourne"
      />
      
      <div className='pt-8 bg-zinc-800'>
        <SectionTitle
          title="Versatile Sliding Solutions for Modern Melbourne Living"
          subtitle="Our custom sliding doors offer more than just space-saving benefits; they provide elegant and practical solutions throughout your home. <br><br> Imagine sleek <span class='font-extrabold'> sliding wardrobe doors </span> that maximise bedroom space, stylish <span class='font-extrabold'> room dividers </span> creating flexible living zones or home offices, <span class='font-extrabold'> discreet pantry doors </span> , or even sophisticated ways to conceal a European laundry or storage nook. <br><br>Perfect Kitchen & Robes designs and installs sliding door systems tailored precisely to your needs and your Melbourne home's layout."
          textColor='text-white'
          backgroundColor='bg-zinc-800'
        />
      </div>

      <MasonryGallery title='Our Sliding Door Projects' images={slidingDoorGalleryImages} />

      <div className='pt-8 bg-[#F5F5F5]'>
        <SectionTitle
          title="Engineered for Smooth Operation and Lasting Quality"
          subtitle="A sliding door should glide effortlessly and quietly. <br><br> We use high-quality tracking systems and durable rollers engineered for smooth, reliable performance year after year. Features like optional soft-close mechanisms add a touch of quiet luxury. <br><br> Our experienced Melbourne team ensures precise measurement and installation, guaranteeing your doors fit perfectly and operate flawlessly, enhancing both the functionality and aesthetics of your space."
          textColor='text-black'
          backgroundColor='bg-[#F5F5F5]'
          />
      </div>

      <MaterialsFeatures {...slidingDoorsServiceFeatures} />

      <MovingSlideShow images={brandsUsedImages} />

      <ElfsightGoogleReviews />

      <ContactForm />

      <FAQ 
        faqData={slidingDoorFAQs} 
        title="Frequently Asked Questions" 
      />
    </main>
  );
}
