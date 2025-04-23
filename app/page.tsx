import React from 'react';

import Hero from '@/components/heroes/Hero';
import GridGallery from '@/components/home/GridGallery';
import ImageCarousel from '@/components/home/image-carousel-descp/ImageCarousel';
import SocialMediaSection from '@/components/shared/SocialMediaSection';
import HalfHero from '@/components/heroes/vertical-hero/HalfVerticalHero';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import ContactForm from '@/components/shared/ContactForm';

// Import data from our centralised data file
import { imagePaths, servicesData, galleryData, aboutUsData } from '@/data/home-variables';

// Metadata for the page
export const metadata = {
  title: 'Perfect Kitchen Robes | Custom Kitchens, Wardrobes & Interiors Melbourne',
  description: 'Transform your home with bespoke kitchens, wardrobes, sliding doors and vanities crafted by experts in Melbourne. Request a quote today!',
  alternates: {
    canonical: 'https://www.perfectkitchenrobes.com/'
  }
};

export default function Home() {
  return (
    <div>
      <Hero
        imagePath={imagePaths.homepage.hero}
        title="Designed for You, Built to Last"
        text="With over 25+ years of delivering dream kitchens and robes."
        buttonText="Make an Enquiry"
        buttonLink="/contact"
      />
      
      <GridGallery images={servicesData}/>

      <ImageCarousel images={galleryData}/>

      <SocialMediaSection/>

      <HalfHero images={aboutUsData}/>
      
      <TestimonialSlider/>
      
      <ContactForm/>
    </div>
  );
}