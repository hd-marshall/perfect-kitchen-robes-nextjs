import { Metadata } from 'next';
import HalfHorizontalHero from '@/components/heroes/HalfHorizontalHero';
import SectionTitle from '@/components/ui/SectionTitle';
import OurApproach from '@/components/services/OurApproach'
import MasonryGallery from '@/components/services/MasonryGallery';
import MovingSlideShow from '@/components/shared/MovingSlideShow';
import ContactForm from '@/components/shared/ContactForm';
import FAQ from '@/components/shared/FAQ';

import { vanityGalleryImages, brandsUsedImages } from '@/data/services-images';
import { vanityFAQs } from '@/data/faq-data';

const vanityProcessSteps = [
  {
    title: "Understanding Your Needs",
    description: "We discuss how you use the bathroom, your storage requirements (makeup, toiletries, towels?), and your preferred style during an initial consultation.",
    imageSrc: "/assets/images/our-process/thinking.png"
  },
  {
    title: "Working with Your Space",
    description: "We take precise measurements, considering existing plumbing points and the overall layout of your bathroom to maximise functionality.",
    imageSrc: "/assets/images/our-process/curve.png"
  },
  {
    title: "Material & Finish Selection",
    description: "We guide you through choices for durable and stylish benchtops (like engineered stone, porcelain, or high-quality laminates), cabinetry finishes (including moisture-resistant polyurethane or textured laminates), and hardware (handles or handle-less options).",
    imageSrc: "/assets/images/our-process/wood.png"
  },
  {
    title: "Seamless Integration",
    description: "The design ensures your chosen basin (undermount, countertop, or integrated) and tapware work perfectly with the cabinetry.",
    imageSrc: "/assets/images/our-process/hammer.png"
  }
];

export const metadata: Metadata = {
  title: "Custom Bathroom Vanities Melbourne | Design & Fit | Perfect Kitchen & Robes",
  description: "Upgrade your bathroom with elegant, custom-designed vanities from Perfect Kitchen & Robes in Melbourne. Quality materials & expert installation.",
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/services/vanities'
  }
};

export default function VanityServicesPage() {
  return (
    <main className='bg-white'>
      <HalfHorizontalHero
        imagePath="/assets/images/vanities/vanity-home-our-work.webp"
        text="Custom Bathroom Vanities Melbourne"
      />

      <div className='pt-8 bg-zinc-800'>
        <SectionTitle
          title="Find Your Perfect Vanity Style: <br> Wall-Hung, Floor-Standing & More"
          subtitle="Your bathroom vanity is a key feature, setting the tone for the entire space. We design and craft a wide range of styles to suit any Melbourne bathroom, ensuite, or powder room. <br><br> Choose from sleek <span class='font-extrabold'> wall-hung (floating) vanities </span> that create a sense of spaciousness and make cleaning easy, or classic <span class='font-extrabold'> floor-standing vanities <span> offering maximum storage capacity. <br></br> We cater for <span class='font-extrabold'> single or double basins </span> <br> and can design slimline units for smaller spaces, ensuring a perfect fit both functionally and aesthetically."
          textColor='text-white'
          backgroundColor='bg-zinc-800'
        />
      </div>

      <OurApproach 
        processStepData={vanityProcessSteps}
        title="Our Custom Design Approach for Your Bathroom"
        subtitle="Creating the ideal vanity involves more than just choosing a style. Our experienced designers work closely with you:"
        textColor="text-black"
        backgroundColor="bg-white"
      />

      <MasonryGallery title='Our Vanity Collection' images={vanityGalleryImages} />

      <div className='pt-8 bg-zinc-800'>
        <SectionTitle
          title="Beyond Beauty: <br> Built Tough for Melbourne Bathrooms"
          subtitle="While aesthetics are important, durability is crucial in a bathroom. <br> <br> Building on our commitment to waterproof construction, we use high-quality, moisture-resistant boards (HMR) for carcasses and employ construction techniques designed to withstand daily use and the specific humid conditions often found in Melbourne homes. <br><br> Our expert installation ensures your vanity is fitted securely and precisely, providing years of reliable use and adding lasting value to your bathroom renovation."
          textColor='text-white'
          backgroundColor='bg-zinc-800'
        />
      </div>

      <MovingSlideShow images={brandsUsedImages} />

      <ContactForm />

      <FAQ 
        faqData={vanityFAQs} 
        title="Frequently Asked Questions" 
      />
    </main>
  );
}