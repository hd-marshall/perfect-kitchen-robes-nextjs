import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import SectionTitle from '@/components/ui/SectionTitle';
import OurApproach from '@/components/services/OurApproach'
import MasonryGallery from '@/components/services/MasonryGallery';
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import ContactForm from '@/components/shared/ContactForm';
import FAQ from '@/components/shared/FAQ';

import { kitchenGalleryImages, brandsUsedImages } from '@/data/services-images';
import { kitchenFAQs } from '@/data/faq-data';

const kitchenProcessSteps = [
  {
    title: "In-Depth Consultation",
    description: "We'll meet with you, ideally in your Melbourne home, to discuss your needs, budget, and style ideas. We talk workflow – are you a keen baker, a quick meal prepper, or love entertaining?",
    imageSrc: "/assets/images/our-process/thinking.png"
  },
  {
    title: "Space Optimisation",
    description: "We expertly assess your existing space, suggesting layout improvements to enhance flow and functionality.",
    imageSrc: "/assets/images/our-process/curve.png"
  },
  {
    title: "Concept & Visualisation",
    description: "We develop detailed designs, potentially including 3D views, so you can clearly visualise your new kitchen before committing.",
    imageSrc: "/assets/images/our-process/wood.png"
  },
  {
    title: "Material Guidance",
    description: "We guide you through selecting the best benchtops, cabinetry finishes, splashbacks, and hardware from our range of high-quality, durable options, many sourced from top Australian suppliers.",
    imageSrc: "/assets/images/our-process/contract.png"
  },
  {
    title: "Clear Quote & Timeline",
    description: "You receive a transparent quote and a realistic project timeline.",
    imageSrc: "/assets/images/our-process/hammer.png"
  }
];

export const metadata: Metadata = {
  title: "Custom Kitchen Design & Installation Melbourne | Perfect Kitchen & Robes",
  description: "Transform your space with bespoke kitchen designs from Perfect Kitchen & Robes. Expert Melbourne designers & installers. Request a free consultation!",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/kitchens'
  }
};

export default function KitchenServicesPage() {
  return (
    <main className='bg-white'>
      <HalfHorizontalHero
        imagePath="/assets/images/kitchens/kitchens-hero-page.webp"
        text="Custom Kitchen Designs Melbourne"
      />

      <div className='pt-8 bg-zinc-800'>
        <SectionTitle
          title="Your Kitchen: <br> The True Heart of Your Melbourne Home"
          subtitle="We believe a kitchen is far more than just a place to cook. <br><br> It’s where families gather, conversations start, homework gets done, and memories are made. That’s why our design philosophy goes beyond aesthetics; we focus on creating a space that truly works for your lifestyle. <br><br> Whether you need a robust family hub that can handle the morning rush or a sophisticated entertainer’s kitchen, we design with your daily life in mind, ensuring your new kitchen becomes your favourite room in the house."
          textColor='text-white'
          backgroundColor='bg-zinc-800'
        />
      </div>

      <OurApproach 
        processStepData={kitchenProcessSteps}
        title="Our Collaborative Design Process"
        subtitle="Creating your dream kitchen is a partnership. We start by listening carefully to understand how you use your current space, what frustrates you, and what you aspire to have."
        textColor="text-black"
        backgroundColor="bg-white"
      />

      <MasonryGallery title='Our Kitchen Portfolio' images={kitchenGalleryImages} />

      <div className='pt-8 bg-zinc-800'>
        <SectionTitle
          title="Functionality Meets Style: <br> Smart Features & Finishes"
          subtitle="A truly great kitchen blends seamless functionality with beautiful design. We integrate clever storage solutions like pull-out pantries, corner carousels, and custom drawer organisers to maximise space and keep things tidy. <br><br> We consider everything from durable, stylish benchtops (like engineered stone, laminate, or timber) and practical splashbacks to task lighting placement and integration points for your chosen appliances, ensuring a cohesive and highly usable space."
          textColor='text-white'
          backgroundColor='bg-zinc-800'
        />
      </div>

      <MovingSlideShow images={brandsUsedImages} />
      
      <ContactForm />

      <FAQ 
        faqData={kitchenFAQs} 
        title="Frequently Asked Questions" 
      />
    </main>
  );
}

